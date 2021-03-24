/*
Película (título, año, duración, encolor, presupuesto, nomestudio, idproductor)
Elenco (título, año, nombre, sueldo)
Actor (nombre, dirección, telefono, fechanacimiento, sexo)
Productor (idproductor, nombre, dirección, teléfono)
Estudio (nomestudio, dirección)
*/

--El ingreso total recibido por cada actor, sin importar en cuantas películas haya participado.

SELECT nombre, SUM(Sueldo) as 'Ingreso Total'
FROM Elenco E
GROUP BY nombre

--El monto total destinado a películas por cada Estudio Cinematográfico, durante la década de los 80's.

SELECT nomestudio, SUM(presupuesto) as 'Monto Total de presupuesto'
FROM Pelicula P
WHERE P.año between 1980 AND 1989
GROUP BY nomestudio

--Nombre y sueldo promedio de los actores (sólo hombres) que reciben en promedio un pago superior a 5 
--millones de dolares por película.

SELECT nombre, AVG(sueldo) as 'Promedio de sueldo'
FROM Elenco E, Actor A
WHERE E.nombre = A.nombre AND A.sexo = 'Hombre'
GROUP BY nombre 
HAVING AVG(sueldo) > 5

--Título y año de producción de las películas con menor presupuesto. (Por ejemplo, la película de 
--Titanic se ha producido en varias veces entre la lista de películas estaría la producción de Titanic 
--y el año que fue filmada con menor presupuesto).

SELECT título, MIN(presupuesto) as 'Presupuesto mínimo'
FROM Película P
GROUP BY título

--Mostrar el sueldo de la actriz mejor pagada.

SELECT MAX(sueldo) as 'Mejor sueldo'
FROM Elenco E, Actor A
WHERE E.nombre = A.nombre AND A.sexo = 'Mujer'