-- Película(título, año, duración, encolor, presupuesto, nomestudio, idproductor)
-- Elenco(título, año, nombre, sueldo)
-- Actor(nombre, dirección, telefono, fechanacimiento, sexo)
-- Productor(idproductor, nombre, dirección, teléfono)
-- Estudio(nomestudio, dirección)

-- 1.-Actrices de “Las brujas de Salem”.

-- Sin Subconsultas
SELECT A.Nombre
FROM Actor A, Elenco E
WHERE A.Nombre = E.Nombre
AND Sexo='F'
AND Titulo = 'Las Brujas de Salem'

-- Con Subconsultas
SELECT Nombre
FROM Elenco
WHERE Titulo = 'Las Brujas de Salem'
AND Nombre IN ( SELECT Nombre
                FROM Actor A 
                WHERE Sexo = 'F')

-- 2.- Nombres de los actores que aparecen en películas producidas por MGM en 1995.

-- Sin Subconsultas
SELECT E.nombre
FROM Pelicula P, Elenco E
WHERE P.Titulo = E.Titulo
AND P.Año = E.Año
AND P.nomestudio = 'MGM'
AND Pel.año = 1995

-- Con Subconsultas
SELECT Nombre
FROM Elenco E
WHERE año = 1995
AND Titulo IN ( SELECT Titulo
                FROM Pelicula
                WHERE nomestudio = 'MGM')

-- 3.- Películas que duran más que “Lo que el viento se llevó” (de 1939).

-- Sin Subconsultas
No se puede
/*objet = SELECT duracion
        FROM Pelicula
        WHERE Titulo = 'Lo que el viento se llevó'
        AND Año = 1939

SELECT Titulo, Año
FROM Pelicula 
WHERE duracion > objet*/

-- Con Subconsultas
SELECT Titulo, Año
FROM Pelicula
WHERE duracion > (  SELECT duracion
                    FROM Pelicula
                    WHERE Titulo = 'Lo que el viento se llevó'
                    AND Año = 1939)

-- 4.- Productores que han hecho más películas que George Lucas.

-- Sin Subconsultas
No se puede

-- Con Subconsultas
SELECT Prod.Nombre, COUNT(*) AS 'Peliculas producidas'
FROM Pelicula Pel, Productor Prod
WHERE Pel.idproductor = Prod.idproductor
GROUP BY Prod.nombre
HAVING COUNT(*) > ( SELECT COUNT(*)
                    FROM Pelicula Pel, Productor Prod
                    WHERE Pel.idproductor = Prod.idproductor
                    AND nombre = 'George Lucas')

-- 5.- Nombres de los productores de las películas en las que ha aparecido Sharon Stone.

-- Sin Subconsultas
SELECT Prod.Nombre
FROM Pelicula Pel, Productor Prod, Elenco E
WHERE Pel.idproductor = Prod.idproductor
AND Pel.Titulo = E.Titulo
AND Pel.año = E.año
AND E.Nombre = 'Sharon Stone'

-- Con pocas Subconsultas
SELECT nombre 
FROM Productores
WHERE idproductor IN (  SELECT idproductor
			FROM Elenco E, Pelicula P
                        WHERE P.titulo = E.titulo
                        AND P.año = E.año
                        AND E.nombre = ‘Sharon Stone’ )


-- Con Subconsultas
SELECT Nombre
FROM Productor
WHERE idproductor IN (  SELECT idproductor
                        FROM Pelicula
                        WHERE Titulo, Año IN (  SELECT Titulo, Año
                                                FROM Elenco
                                                WHERE Nombre = 'Sharon Stone'))

-- 6.- Título de las películas que han sido filmadas más de una vez

-- Sin Subconsultas
SELECT titulo, COUNT(*) AS 'Num veces producida'
FROM Pelicula
GROUP BY titulo
HAVING COUNT(*) > 1

-- Con Subconsultas
-- Se puede, pero demasiado complicado para valer la pena
