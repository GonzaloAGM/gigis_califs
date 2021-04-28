module.exports = class inputsCiclos {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(prograSel, terapAsig) {
      this.prograSel = prograSel;
      this.terapAsig = terapAsig;

    }
  
    static setProg(prograSel){
      this.prograSel = prograSel;
    }

    static setGrup(terapAsig){
        this.terapAsig = terapAsig;
    }
  
    static getProg(){
        return this.prograSel;
    }

    static getTer(){
        return this.terapAsig;
    }
}