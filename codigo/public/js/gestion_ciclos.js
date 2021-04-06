// jQuery modal

$(document).ready(function(){
    $('.modal').modal();
  });


// jQuery collap

$(document).ready(function(){
    $('.collapsible').collapsible();
  });

// jQuery select

  $(document).ready(function(){
    $('select').formSelect();
  });
  
// jQuery date picker 
  $(document).ready(function(){
    $('.datepicker').datepicker();
  });
  
// date picker en español
  $(function(){
    $('.datepicker').pickadate({
      format: 'dd/mm/yyyy',
      monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      weekdaysFull: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
      weekdaysAbbrev:	['D','L','M','M','J','V','S'],
      selectMonths: true,
      selectYears: 100, // Puedes cambiarlo para mostrar más o menos años
      today: 'Hoy',
      clear: 'Limpiar',
      close: 'Ok',
      labelMonthNext: 'Siguiente mes',
      labelMonthPrev: 'Mes anterior',
      labelMonthSelect: 'Selecciona un mes',
      labelYearSelect: 'Selecciona un año',
    });
  });