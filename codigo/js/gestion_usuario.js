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
    if (val.find(element => element > 4)){
      console.log("nuevo");
      location.replace("./crear_rol.html");
    }
    else if (val.find(element => element < 2)){
      console.log("terapeuta");
      location.replace("./crear_terapeuta.html");
    }
    else if (val.find(element => element < 3)){
      console.log("participante");
      location.replace("./crear_participante.html");
    }
    else{
      console.log("gestor o admin");
      location.replace("./gestion_usuarios.html");
      window.alert("Se asignaron correctamente los roles al usuario nuevo.");
    }
  });
});

//Nuevo rol, validar si no se seleccionó otro rol
function nuevoRol(){
  window.alert("Se asignaron correctamente los roles al usuario nuevo.");
  location.replace("./gestion_usuarios.html");
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
  window.alert("Se asignaron correctamente los roles al usuario nuevo.");
  location.replace("./gestion_usuarios.html");
 
}
function nuevoParticipante(){
  window.alert("Se asignaron correctamente los roles al usuario nuevo.");
  location.replace("./gestion_usuarios.html");
}
