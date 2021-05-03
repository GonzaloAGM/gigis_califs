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

function toastRegPar(){   
  M.toast({
            html: 'Se registró correctamente el participante.',
            displayLenght: 5000
          });
}

function camposTerapeuta(opcion){
  if (opcion.value === '2'){
    document.getElementById("campoT1").style.display = "block";
    document.getElementById("campoT2").style.display = "block";
    document.getElementById("campoT3").style.display = "block";
    document.getElementById("campoT4").style.display = "block";
  }else{
    document.getElementById("campoT1").style.display = "none";
    document.getElementById("campoT2").style.display = "none";
    document.getElementById("campoT3").style.display = "none";
    document.getElementById("campoT4").style.display = "none";
  }
}




//Calcular edad 
function calculaEdad(){
  let hoy = new Date();
  let nacimiento = document.getElementByName("fechaN");
  let m;
  edad = hoy.getFullYear() - nacimiento.getFullYear();
  m = hoy.getMonth() - nacimiento.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad=edad-1;
  }  
  document.getElementByName("edad").innerHTML = edad; 
  console.log('edad desde js');
  console.log(edad);
  console.log(document.getElementByName("edad").innerHTML); 
}

// jQuery date picker 
$(document).ready(function(){
  const hoy = new Date();
  const maxYear = hoy.getFullYear();
  const minYear = hoy.getFullYear()-65;
  $('.datepickerP').datepicker({ 
    format: 'yyyy-mm-dd',
    firstDay: true,
    maxDate: new Date(),
    yearRange: [minYear,maxYear], 
    container: 'body',
    //En español
    i18n: {
        cancel: 'Cancelar',
        done: 'Aceptar',
        months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        weekdays: ["Domingo","Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        weekdaysShort: ["Dom","Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
        weekdaysAbbrev: ["D","L", "M", "M", "J", "V", "S"]
    }
})
});