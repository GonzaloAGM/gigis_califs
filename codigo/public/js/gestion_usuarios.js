// Or with jQuery

$(document).ready(function(){
    $('.modal').modal();
  });

// Or with jQuery

$(document).ready(function(){
  $('select').formSelect();
});

// Avisar que se creo correctamente el usuario
function toastRegUser(){   
  M.toast({
            html: 'Se registró correctamente el usuario.',
            displayLenght: 5000
          });
}

function camposTerapeuta(opcion){
  if (opcion.value === '2'){
    document.getElementById("campoT1").style.visibility = "visible";
    document.getElementById("campoT2").style.visibility = "visible";
    document.getElementById("campoT3").style.visibility = "visible";
    document.getElementById("campoT4").style.visibility = "visible";
  }else{
    document.getElementById("campoT1").style.visibility = "hidden";
    document.getElementById("campoT2").style.visibility = "hidden";
    document.getElementById("campoT3").style.visibility = "hidden";
    document.getElementById("campoT4").style.visibility = "hidden";
  }
}

 // Autocompletar
 $(document).ready(function(){
  $('input.autocomplete').autocomplete({
    data: {
      "Alejandra": null,
      "Carolina": null,
      "Eva": null
    },
  });
});


// Cambiar rol de usuario existente
$(document).ready(() => {
  $(".crearRol").on("click", () => {
    location.replace("./");
    window.alert("Se registró correctamente el rol.");
  });
});

//Nuevo rol, validar si no se seleccionó otro rol
function nuevoRol(){
  M.toast({html: 'Se registró correctamente el rol.'});
  location.replace("./");
}


// Guardar participante
$(document).ready(() => {
  $(".agregarP").on("click", () => {
    location.replace("./");
    window.alert("Se registró correctamente el participante.");
  });
});

// Eliminar participante
$(document).ready(() => {
  $(".eliminarP").on("click", () => {
    location.replace("./");
    window.alert("Se eliminó el participante.");
  });
});

// Eliminar usuario
$(document).ready(() => {
  $(".eliminarU").on("click", () => {
    M.toast({html: 'Usuario eliminado'}); 

  });
});


// jQuery date picker 
$(document).ready(function(){
  $('.datepickerP').datepicker({ 
    firstDay: true,
    yearRange: 60,
    //En español
    i18n: {
        months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Dic"],
        weekdays: ["Domingo","Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        weekdaysShort: ["Dom","Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
        weekdaysAbbrev: ["D","L", "M", "M", "J", "V", "S"]
    }
})
});