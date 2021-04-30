const db = require('../util/database');

const color = ['red', 'blue', 'green', 'yellow'];
const meses = ['','Ene', 'Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];

module.exports = class DatosConsultas {
  //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
  constructor() {
    this.listaProgam = [];
    this.cicloIni = 0;
    this.intervaloCiclo = true;
    this.cicloFin = 0;
    this.estadoConsulta = true;
    this.califOava = true;
    this.filtrarEdad = false;
    this.edadIni = 0;
    this.intervaloEdad = false;
    this.edadFin = 99;
    this.filtrarSexo = false;
    this.valueSexo = false;
    this.mostrarSexEdad = true;
    this.mostrarCalif = true;
  }

  setListaProg(listaProgam){
    console.table(listaProgam);
    this.listaProgam = listaProgam;
  }

  getModoConsulta(){
      return this.listaProgam.length;
  }

  setValues(cicloIni,intervaloCiclo,cicloFin,estadoConsulta,califOava,filtrarEdad,edadIni,intervaloEdad,edadFin,filtrarSexo,valueSexo,mostrarSexEdad,mostrarCalif){
    this.cicloIni = cicloIni;
    this.intervaloCiclo = intervaloCiclo;
    this.cicloFin = cicloFin;
    this.estadoConsulta = estadoConsulta;
    this.califOava = califOava;
    this.filtrarEdad = filtrarEdad;
    this.edadIni = edadIni;
    this.intervaloEdad = intervaloEdad;
    this.edadFin = edadFin;
    this.filtrarSexo = filtrarSexo;
    this.valueSexo = valueSexo;
    this.mostrarSexEdad = mostrarSexEdad;
    this.mostrarCalif = mostrarCalif;
  }

  static fetchColors(){
      return color;
  }

  static fetchMeses(){
    return meses;
 }

  //Este método servirá para devolver los objetos del almacenamiento persistente.
  static fetchAll() {
    return db.execute('SELECT * FROM CalifDatos');
  }

  getBools(){
      let arrdeBools = {
        estadoConsulta: this.estadoConsulta,
        mostrarSexEdad: this.mostrarSexEdad,
        mostrarCalif:   this.mostrarCalif,
        califOava:      this.califOava
      };
      return arrdeBools;
  }

  fetch(){
    let consultaFinal = '';
    let vars = [];
    
    let subConsultaDatos = '';
    let subConsultasCalifAva = [];
    let ons = [];
    let selects = [];

    if(!this.intervaloCiclo){
        this.cicloFin = this.cicloIni;
    }

    if(!this.intervaloEdad){
        this.edadFin = this.edadIni;
    }

    //Construcción de la extracción de datos de participantes y tabla sobre la cual se une el LEFTT OUTER JOIN
    subConsultaDatos = 'SELECT login, nombreUsuario, apellidoPaterno, apellidoMaterno,';
    if(this.mostrarSexEdad){
        subConsultaDatos += ' sexo, Edad_Matriculacion, ';
    }
    subConsultaDatos += 'idciclo, idprograma, idGrupo FROM CalifDatos WHERE ';
    subConsultaDatos += 'idCiclo >= ? AND idCiclo <= ?';
    vars.push(this.cicloIni);
    vars.push(this.cicloFin);

    if(this.estadoConsulta){//Un solo programa
        subConsultaDatos += ' AND idPrograma = ?';
        vars.push(this.listaProgam[0]);
    } else { // varios programas
        subConsultaDatos += ' AND ( idPrograma = ?';
        vars.push(this.listaProgam[0]);

        for(let i = 1; i < this.listaProgam.length; i++){
            subConsultaDatos += ' OR idPrograma = ?';
            vars.push(this.listaProgam[i]);
        }
        subConsultaDatos += ' ) ';
    }
    if(this.filtrarSexo){
        if(this.valueSexo){
            subConsultaDatos += ' AND sexo = "H"';
        } else {
            subConsultaDatos += ' AND sexo = "M"';
        }
    }
    if(this.filtrarEdad){
        subConsultaDatos += ' AND Edad_Matriculacion >= ? AND Edad_Matriculacion <= ?';
        vars.push(this.edadIni);
        vars.push(this.edadFin);
    }
    subConsultaDatos += ') t1';

    //Construcción de las tablas auxiliares donde se almacenan los datos
    if(this.estadoConsulta){
        let cont = 1;
        for(let i = this.cicloIni; i <= this.cicloFin; i++){
            let texto = '(SELECT login';
            if(this.mostrarCalif){
                if(this.califOava){
                    texto += ', Avance';
                } else {
                    texto += ', CalifInicial, CalifFinal';
                }
            }
            texto += ', idGrupo FROM CalifDatos WHERE idCiclo = ? AND idPrograma = ?'
            vars.push(i);
            vars.push(this.listaProgam[0]);
            if(this.filtrarEdad){
                texto += ' AND Edad_Matriculacion >= ? AND Edad_Matriculacion <= ?';
                vars.push(this.edadIni);
                vars.push(this.edadFin);
            }
            texto += ') t' + (cont*2);
            cont++;
            subConsultasCalifAva.push(texto);
        }
    } else {
        let cont = 1;
        for(let i = this.cicloIni; i <= this.cicloFin; i++){
            for(let k = 0; k< this.listaProgam.length; k++){
                let texto = '(SELECT login';
                if(this.mostrarCalif){
                    if(this.califOava){
                        texto += ', Avance';
                    } else {
                        texto += ', CalifInicial, CalifFinal';
                    }
                }
                texto += ', idGrupo FROM CalifDatos WHERE idCiclo = ? AND idPrograma = ?'
                vars.push(i);
                vars.push(this.listaProgam[k]);
                if(this.filtrarEdad){
                    texto += ' AND Edad_Matriculacion >= ? AND Edad_Matriculacion <= ?';
                    vars.push(this.edadIni);
                    vars.push(this.edadFin);
                }
                texto += ') t' + (cont*2);
                cont++;
                subConsultasCalifAva.push(texto);
            }
        }
    }
    
    //Construcción de los ON's de los LEFT OUTER JOIN
    let cantJoins = (this.cicloFin - this.cicloIni+1)*this.listaProgam.length;
    console.log('Ini - ' + this.cicloFin + '_ Fin - ' + this.cicloIni);
    console.table(this.listaProgam);
    console.log(cantJoins);
    for(let acumJoins = 0; acumJoins < cantJoins; acumJoins++){
        let texto =  'ON (t' + (acumJoins*2+1) + '.login = t' + (acumJoins*2+2) + '.login AND t' + (acumJoins*2+1) + '.idGrupo = t' + (acumJoins*2+2) + '.idGrupo)';
        if(acumJoins + 1 < cantJoins){
            texto += ') t' + (acumJoins*2+3);
        } 
        ons.push(texto);
    }


    //Construcción de los SELECT's de los LEFT OUTER JOIN
    for(let acumJoins = 0; acumJoins < cantJoins; acumJoins++){
        let texto = 'SELECT t' + (acumJoins*2+1) + '.login,' +
                           ' t' + (acumJoins*2+1) + '.nombreUsuario,' +
                           ' t' + (acumJoins*2+1) + '.apellidoPaterno,' +
                           ' t' + (acumJoins*2+1) + '.apellidoMaterno,';
        if(this.mostrarSexEdad){
            texto +=       ' t' + (acumJoins*2+1) + '.sexo,' +
                           ' t' + (acumJoins*2+1) + '.Edad_Matriculacion,';
        }
        if(this.mostrarCalif){
            if(this.estadoConsulta){
                for(let i = 0; i <= acumJoins; i++){
                    if(i === acumJoins){
                        if(this.califOava){
                            texto += ' t' + (acumJoins*2+2) + '.Avance AS `Avance_P' + this.listaProgam[0] + '_ciclo' + (i+this.cicloIni) + '`,';
                        } else {
                            texto += ' t' + (acumJoins*2+2) + '.CalifInicial AS `califIni_P' + this.listaProgam[0] + '_ciclo' + (i+this.cicloIni) + '`,';
                            texto += ' t' + (acumJoins*2+2) + '.CalifFinal AS `califFin_P' + this.listaProgam[0] + '_ciclo' + (i+this.cicloIni) + '`,';
                        }
                        break;
                    } else {
                        if(this.califOava){
                            texto += ' t' + (acumJoins*2+1) + '.Avance_P' + this.listaProgam[0] + '_ciclo' + (i+this.cicloIni) + ',';
                        } else {
                            texto += ' t' + (acumJoins*2+1) + '.califIni_P' + this.listaProgam[0] + '_ciclo' + (i+this.cicloIni) + ',';
                            texto += ' t' + (acumJoins*2+1) + '.califFin_P' + this.listaProgam[0] + '_ciclo' + (i+this.cicloIni) + ',';
                        }
                    }
                }
            } else {
                let k=0;
                let j=0;
                for(let i = 0; i <= acumJoins; i++){
                    if(i === acumJoins){
                        if(this.califOava){
                            texto += ' t' + (acumJoins*2+2) + '.Avance AS `Avance_P' + this.listaProgam[k] + '_ciclo' + (parseInt(j)+parseInt(this.cicloIni)) + '`,';
                        } else {
                            texto += ' t' + (acumJoins*2+2) + '.CalifInicial AS `califIni_P' + this.listaProgam[k] + '_ciclo' + (parseInt(j)+parseInt(this.cicloIni)) + '`,';
                            texto += ' t' + (acumJoins*2+2) + '.CalifFinal AS `califFin_P' + this.listaProgam[k] + '_ciclo' + (j+parseInt(this.cicloIni)) + '`,';
                        }
                        break;
                    } else {
                        if(this.califOava){
                            texto += ' t' + (acumJoins*2+1) + '.Avance_P' + this.listaProgam[k] + '_ciclo' + (parseInt(j)+parseInt(this.cicloIni)) + ',';
                        } else {
                            texto += ' t' + (acumJoins*2+1) + '.califIni_P' + this.listaProgam[k] + '_ciclo' + (parseInt(j)+parseInt(this.cicloIni)) + ',';
                            texto += ' t' + (acumJoins*2+1) + '.califFin_P' + this.listaProgam[k] + '_ciclo' + (parseInt(j)+parseInt(this.cicloIni)) + ',';
                        }
                    }
                    if(((k+1) % this.listaProgam.length) === 0){
                        k = 0;
                        j++;
                    }else{
                        k++;
                    }
                    console.log(k);
                }
                
            }
        }
            texto +=       ' t' + (acumJoins*2+1) + '.idciclo,' +
                           ' t' + (acumJoins*2+1) + '.idprograma,' + 
                           ' t' + (acumJoins*2+1) + '.idGrupo' +
                        ' FROM (';
        selects.push(texto);
    }

    //Construcción string final de la consulta
    for(let acumJoins = cantJoins; acumJoins > 0; acumJoins--){
        consultaFinal += selects[acumJoins - 1];
    }

    consultaFinal += subConsultaDatos;

    for(let acumJoins = 0; acumJoins < cantJoins; acumJoins++){
        consultaFinal += ' LEFT OUTER JOIN ' + 
                          subConsultasCalifAva[acumJoins] + ' ' + 
                          ons[acumJoins];
    }
    console.table(selects);
    console.table(subConsultasCalifAva);
    console.log('Final: ' + consultaFinal);
    console.table(vars);
    return db.execute(consultaFinal,vars);

  }

  fetch2() {
    let texto = 'SELECT nombreUsuario, apellidoPaterno, apellidoMaterno';
    let vars = [];

    //Mostrar sexo y edad de los participantes
    if(this.mostrarSexEdad){
        texto += ', sexo, Edad_Matriculacion';
    }

    //Consulta de varios programas
    if(!this.estadoConsulta){

        if(this.mostrarCalif){
            if(!this.califOava){ // Mostrar solo calificaciones
                texto += ', califInicial, CalifFinal';
            }else{ // Mostrar solo avances
                texto += ', Avance';
            }
        }

        texto += ' FROM CalifDatos WHERE ';

        //Filtrar por ciclo
        if(this.intervaloCiclo){
            texto += 'idCiclo >= ' + this.cicloIni + ' AND idCiclo <= ' + this.cicloFin;
            vars.push(this.cicloIni);
            vars.push(this.cicloFin);
        } else {
            texto += 'idCiclo >= ' + this.cicloIni + ' AND idCiclo <= ' + this.cicloIni;
            vars.push(this.cicloIni);
            vars.push(this.cicloIni);
        }
        
        //console.table(this.listaProgam);
        //Filtrar por programas
        texto += ' AND ( idPrograma = ' + this.listaProgam[0];
        vars.push(this.listaProgam[0]);

        for(let i = 1; i < this.listaProgam.length; i++){
            texto += ' OR idPrograma = ' + this.listaProgam[i];
            vars.push(this.listaProgam[i]);
        }
        texto += ' ) ';
    } 

    //Consulta de un solo programa
    else {

        if(this.mostrarCalif){
            texto += ', califInicial, CalifFinal, Avance';
        }

        texto += ' FROM CalifDatos WHERE ';

        //Filtrar por ciclo
        if(this.intervaloCiclo){
            texto += 'idCiclo >= ' + this.cicloIni + ' AND idCiclo <= ' + this.cicloFin;
            vars.push(this.cicloIni);
            vars.push(this.cicloFin);
        } else {
            texto += 'idCiclo >= ' + this.cicloIni + ' AND idCiclo <= ' + this.cicloIni;
            vars.push(this.cicloIni);
            vars.push(this.cicloIni);
        }
        
        //console.log(this.listaProgam[0]);
        //Filtrar por único programa
        texto += ' AND idPrograma = ' + this.listaProgam[0];
        vars.push(this.listaProgam[0]);
    }

    //Filtrar por edad
    if(this.filtrarEdad){
        if(this.intervaloEdad){
            texto += ' AND Edad_Matriculacion >= ' + this.edadIni + ' AND Edad_Matriculacion <= ' + this.edadFin;
            vars.push(this.edadIni);
            vars.push(this.edadFin);
        } else {
            texto += ' AND Edad_Matriculacion >= ' + this.edadIni + ' AND Edad_Matriculacion <= ' + this.edadIni;
            vars.push(this.edadIni);
            vars.push(this.edadIni);
        }
    }

    //Filtrar por sexo
    if(this.filtrarSexo){
        if(this.valueSexo){
            texto += ' AND sexo = "H"'
        } else {
            texto += ' AND sexo = "M"'
        }
        vars.push(this.valueSexo);
    }
    console.log(texto);
    console.table(vars);
    return db.execute(texto,vars);
  }
};
