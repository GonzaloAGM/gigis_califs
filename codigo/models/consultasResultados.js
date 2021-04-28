const db = require('../util/database');

const color = ['red', 'blue', 'green', 'yellow'];
const meses = ['','Ene', 'Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];

module.exports = class DatosConsultas {
  //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
  constructor() {
    this.listaProgam = [9,2];
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

  fetch() {
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
