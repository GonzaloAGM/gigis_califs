document.addEventListener('DOMContentLoaded', function () {
    var carouselElems = document.querySelector('.carousel.carousel-slider');
        var carouselInstance = M.Carousel.init(carouselElems, {
            fullWidth: true,
            indicators: true,
            numVisible:2
        });
    });
    function moveNextCarousel() {
        var elems = document.querySelector('.carousel.carousel-slider');
        var moveRight = M.Carousel.getInstance(elems);
        moveRight.next(1);
    }
    function movePrevCarousel() {
        var elems = document.querySelector('.carousel.carousel-slider');
        var moveLeft = M.Carousel.getInstance(elems);
        moveLeft.prev(1);
    }

    $(document).ready(function(){
        $('select').formSelect();
      });

M.AutoInit();

var listaProg = [];

function selCard(evt) {
    if(evt.currentTarget.className.includes("blue-grey")){
        //Seleccionar programa
        evt.currentTarget.className = evt.currentTarget.className.replace(" blue-grey", " light-blue");
        listaProg.push(evt.currentTarget.id);
        console.table(listaProg);
    }
    else if(evt.currentTarget.className.includes("light-blue")){
        //Des-seleccionar programa
        evt.currentTarget.className = evt.currentTarget.className.replace(" light-blue", " blue-grey");
        let pos = listaProg.indexOf(evt.currentTarget.id);
        listaProg.splice(pos, 1);
        console.table(listaProg);
    }
    if(listaProg.length > 1){
        document.getElementById('CalifOProg').removeAttribute("disabled");
    }else{
        document.getElementById('CalifOProg').setAttribute("disabled",null);
    }
    document.getElementsByName(numProg).value=listaProg.length;
}

function todosProg(){
    tarjetProg = document.getElementsByClassName("card");
    for (i = 0; i < tarjetProg.length; i++) {
        if(tarjetProg[i].className.includes("blue-grey")){
            tarjetProg[i].className = tarjetProg[i].className.replace(" blue-grey", " light-blue");
            listaProg.push(tarjetProg[i].id);
        }
    }
    console.table(listaProg);
    document.getElementsByName(numProg).value=listaProg.length;
}

function ningunProg(){
    tarjetProg = document.getElementsByClassName("card");
    for (i = 0; i < tarjetProg.length; i++) {
        if(tarjetProg[i].className.includes("light-blue")){
            tarjetProg[i].className = tarjetProg[i].className.replace(" light-blue", " blue-grey");
            listaProg.pop();
        }
    }
    console.table(listaProg);
    document.getElementsByName(numProg).value=listaProg.length;
}