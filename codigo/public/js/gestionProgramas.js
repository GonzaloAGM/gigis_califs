
function agregarPrograma(){
    //Obtener referencia para programas
    let programa = document.getElementById("programas");

    let grid = document.createElement("div");
    grid.className = "col s12 m6 l4";

    let tarjeta = document.createElement("div");
    tarjeta.className = "card";

    let imagenTarjeta = document.createElement("div");
    imagenTarjeta.className = "card-image";

    let imagen = document.createElement("img");
    imagen.src = "https://www.fundacionsomos.cl/wp-content/uploads/2017/05/IMG_2792-960x750.jpeg";

    let contenidoTarjeta = document.createElement("div");
    contenidoTarjeta.className = "card-content";

    let filaContenido = document.createElement("div");
    filaContenido.className = "row";

    let columnaContenido1 = document.createElement("div");
    columnaContenido1.className = "col s12 m6";
    let columnaContenido2 = columnaContenido1;

    let enlace = document.createElement("a");
    enlace.href = "./programas_programa1.html";

    let titulo = document.createElement("span");
    titulo.className = "card-title";
    titulo.text = "Programa 1";

    let nivel = document.createElement("div");
    nivel.className = "nivel-programas";

    let nivelIcono = document.createElement("i");
    nivelIcono.className = "material-icons red-text medium right";
    nivelIcono.text = "looks_one";

    nivel.appendChild(nivelIcono);
    enlace.appendChild(titulo);
    columnaContenido2.appendChild(nivel);
    columnaContenido1.appendChild(enlace);
    filaContenido.appendChild(columnaContenido1);
    filaContenido.appendChild(columnaContenido2);
    contenidoTarjeta.appendChild(filaContenido);
    imagenTarjeta.appendChild(imagen);
    tarjeta.appendChild(imagenTarjeta);
    tarjeta.appendChild(contenidoTarjeta);
    grid.appendChild(tarjeta);

    programa.appendChild(grid);
}
agregarPrograma();
agregarPrograma();
agregarPrograma();
agregarPrograma();
