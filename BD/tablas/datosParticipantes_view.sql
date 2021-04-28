
CREATE VIEW CalifDatos AS
(SELECT
    Punt.login,
    U.nombreUsuario,
    U.apellidoPaterno,
    U.apellidoMaterno,
    TIMESTAMPDIFF(YEAR,Part.`fechaNacimiento`, CURRENT_TIMESTAMP()) AS `Edad_Actual`,
    TIMESTAMPDIFF(YEAR,Part.`fechaNacimiento`, C.fechaFinal) AS `Edad_Matriculacion`,
    G.idCiclo,
    G.idPrograma,
    P.puntajeMaximo,
    G.numeroGrupo,
    Punt.idNivel,
    AVG(punt.puntajeInicial) AS `CalifInicial`,
    AVG(punt.puntajeFinal) AS `CalifFinal`,
    ((AVG(punt.puntajeFinal) - AVG(punt.puntajeInicial)) / (P.puntajeMaximo-1)) * 100 AS `Avance`
FROM
    participantes_grupos_objetivo Punt,
    grupos G,
    programas P,
    usuarios U,
    participantes Part,
    ciclos C
WHERE
    Punt.idGrupo = G.idGrupo 
    AND G.idPrograma = P.idPrograma 
    AND U.login = punt.login
    AND U.login = Part.login
    AND C.idCiclo = G.idCiclo
GROUP BY
    punt.login,
    punt.idGrupo,
    punt.idNivel

CREATE VIEW CalifDatos AS (SELECT
    Punt.login,
    U.nombreUsuario,
    U.apellidoPaterno,
    U.apellidoMaterno,
    Part.sexo,
    TIMESTAMPDIFF(YEAR,Part.`fechaNacimiento`, CURRENT_TIMESTAMP()) AS `Edad_Actual`,
    TIMESTAMPDIFF(YEAR,Part.`fechaNacimiento`, C.fechaFinal) AS `Edad_Matriculacion`,
    G.idCiclo,
    G.idPrograma,
    P.puntajeMaximo,
    G.numeroGrupo,
    Punt.idNivel,
    AVG(punt.puntajeInicial) AS `CalifInicial`,
    AVG(punt.puntajeFinal) AS `CalifFinal`,
    ((AVG(punt.puntajeFinal) - AVG(punt.puntajeInicial)) / (P.puntajeMaximo-1)) * 100 AS `Avance`
FROM
    participantes_grupos_objetivo Punt,
    grupos G,
    programas P,
    usuarios U,
    participantes Part,
    ciclos C
WHERE
    Punt.idGrupo = G.idGrupo 
    AND G.idPrograma = P.idPrograma 
    AND U.login = punt.login
    AND U.login = Part.login
    AND C.idCiclo = G.idCiclo
GROUP BY
    punt.login,
    punt.idGrupo,
    punt.idNivel)