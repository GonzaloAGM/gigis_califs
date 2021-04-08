// Or with jQuery

$(document).ready(function(){
    $('.modal').modal();
});

// Eliminar participante
$(document).ready(() => {
    $(".eliminarProgra").on("click", () => {
      location.replace("./");
      window.alert("Se eliminó el programa.");
    });
});

      //let index = programas.indexOf(programa);
      //programas.splice(index,1);