// Or with jQuery

$(document).ready(function(){
    $('.modal').modal();
  });

// Or with jQuery

$(document).ready(function(){
  $('select').formSelect();
});

// Validar rol para crear usuario
$(document).ready(() => {
  $(".validarRol").on("click", () => {
    const val = ($('select[name^="selRol"]').val());
    if (val.find(element => element < 2)){
      console.log("terapeuta");
      location.replace("./crear-terapeuta");
    }
    else if(val.find(element => element >  1)){
      console.log("gestor o admin");
      location.replace("./gestion-usuarios");
      window.alert("Se guardó correctamente el usuario.");
    }
  });
});

// Cambiar rol de usuario existente
$(document).ready(() => {
  $(".crearRol").on("click", () => {
    location.replace("./gestion-usuarios");
    window.alert("Se registró correctamente el rol.");
  });
});

//Nuevo rol, validar si no se seleccionó otro rol
function nuevoRol(){
  window.alert("Se guardó correctamente el usuario.");
  location.replace("./gestion-usuarios");
 // if (val.find(element => element < 2)){
 //   console.log("terapeuta");
 //   location.replace("./nuevo_terapeuta.html");
  //}
  //else if (val.find(element => element > 2 && element < 4)){
    //console.log("gestor o admin");
   // location.replace("./nuevo_administrador.html");
  //}
  //else {
    //location.replace("./gestion_usuarios.html");
    //window.alert("Se asignaron correctamente los roles al usuario nuevo.");
  //}
}
function nuevoTerapeuta(){
  window.alert("Se guardó correctamente el usuario.");
  location.replace("./gestion-usuarios");
 
}

// Guardar participante
$(document).ready(() => {
  $(".agregarP").on("click", () => {
    location.replace("./gestion-participantes");
    window.alert("Se registró correctamente el participante.");
  });
});

// Eliminar participante
$(document).ready(() => {
  $(".eliminarP").on("click", () => {
    location.replace("./gestion-participantes");
    window.alert("Se eliminó el participante.");
  });
});

// Eliminar usuario
$(document).ready(() => {
  $(".eliminarU").on("click", () => {
    location.replace("./gestion-usuarios");
    window.alert("Se eliminó el usuario.");
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