function opcionesCalificacion() {
    //Obtener la referencia de campos
    let campos = document.getElementsByClassName("puntaje");
    console.log(campos)
    let otors = document.getElementsByClassName("puntaje");
    console.log(otors);
    let seleccion = document.createElement("select");
    let opciones = [1,2,3,4,5]


    for (let i = 0; i < opciones.length; i++){
        let opcion = document.createElement("option");
        opcion.text = opciones[i];
        opcion.value = opciones[i];
        seleccion.appendChild(opcion);
    }

    for(let j = 0; j < campos.length; j++){
        campos[3].appendChild(seleccion);
        campos[j].appendChild(seleccion)
    }
   // otors.appendChild(seleccion);

}

opcionesCalificacion();

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });

