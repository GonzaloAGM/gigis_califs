
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
------------------------------------------------------------------------------------------------------
CREATE VIEW CalifDatos AS (SELECT
    Punt.login,
    U.nombreUsuario,
    U.apellidoPaterno,
    U.apellidoMaterno,
    Part.sexo,
    TIMESTAMPDIFF(YEAR,Part.`fechaNacimiento`, CURRENT_TIMESTAMP()) AS `Edad_Actual`,
    TIMESTAMPDIFF(YEAR,Part.`fechaNacimiento`, C.fechaFinal) AS `Edad_Matriculacion`,
	G.idGrupo,
    G.idCiclo,
    G.idPrograma,
    P.puntajeMaximo,
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

----------------------------------------Consulta de calificaciones con datos de p2 y p9 en ciclos 10 y 11--------------------------------------------------------

SELECT 
	t7.login,
	t7.nombreUsuario,
	t7.apellidoPaterno,
	t7.apellidoMaterno,
	t7.sexo,
	t7.Edad_Matriculacion,
	t7.califIni_P9_ciclo10,
	t7.califFin_P9_ciclo10,
	t7.califIni_P2_ciclo10,
	t7.califFin_P2_ciclo10,
	t7.califIni_P9_ciclo11,
	t7.califFin_P9_ciclo11,
	t8.CalifInicial as `califIni_P2_ciclo11`,
	t8.CalifFinal as `califFin_P2_ciclo11`,
	t7.idciclo,
	t7.idprograma,
	t7.idGrupo
FROM
	(SELECT 
		t5.login,
		t5.nombreUsuario,
		t5.apellidoPaterno,
		t5.apellidoMaterno,
		t5.sexo,
		t5.Edad_Matriculacion,
		t5.califIni_P9_ciclo10,
		t5.califFin_P9_ciclo10,
		t5.califIni_P2_ciclo10,
		t5.califFin_P2_ciclo10,
		t6.CalifInicial as `califIni_P9_ciclo11`,
		t6.CalifFinal as `califFin_P9_ciclo11`,
		t5.idciclo,
		t5.idprograma,
		t5.idGrupo
	FROM
		(SELECT
			t3.login,
			t3.nombreUsuario,
			t3.apellidoPaterno,
			t3.apellidoMaterno,
			t3.sexo,
			t3.Edad_Matriculacion,
			t3.califIni_P9_ciclo10,
			t3.califFin_P9_ciclo10,
			t4.CalifInicial as `califIni_P2_ciclo10`,
			t4.CalifFinal as `califFin_P2_ciclo10`,
			t3.idciclo,
			t3.idprograma,
			t3.idGrupo
		FROM
			(SELECT
				t1.login,
				t1.nombreUsuario,
				t1.apellidoPaterno,
				t1.apellidoMaterno,
				t1.sexo,
				t1.Edad_Matriculacion,
				t2.CalifInicial as `califIni_P9_ciclo10`,
				t2.CalifFinal as `califFin_P9_ciclo10`,
				t1.idciclo,
				t1.idprograma,
				t1.idGrupo
			FROM
				(SELECT
					login,
					nombreUsuario,
					apellidoPaterno,
					apellidoMaterno,
					sexo,
					Edad_Matriculacion,
					idciclo,
					idprograma,
					idGrupo
				FROM CalifDatos
				WHERE idCiclo >= 10 AND idCiclo <= 11 AND(idPrograma = 9 OR idPrograma = 2) AND sexo = "M" AND Edad_Matriculacion >= 1 AND Edad_Matriculacion <= 18) t1
			LEFT OUTER JOIN 
				(SELECT
					login,
					CalifInicial,
					CalifFinal,
					idGrupo
				FROM
					CalifDatos
				WHERE
					idCiclo = 10 AND idPrograma = 9 AND sexo = "M" AND Edad_Matriculacion >= 1 AND Edad_Matriculacion <= 18) t2
			ON (t1.login = t2.login AND t1.idGrupo = t2.idGrupo)) t3
		LEFT OUTER JOIN
			(SELECT
				login,
				CalifInicial,
				CalifFinal,
				idGrupo
			FROM
				CalifDatos
			WHERE
				idCiclo = 10 AND idPrograma = 2 AND sexo = "M" AND Edad_Matriculacion >= 1 AND Edad_Matriculacion <= 18) t4
		ON (t3.login = t4.login AND t3.idGrupo = t4.idGrupo)) t5
	LEFT OUTER JOIN
		(SELECT
			login,
			CalifInicial,
			CalifFinal,
			idGrupo
		FROM
			CalifDatos
		WHERE
			idCiclo = 11 AND idPrograma = 9 AND sexo = "M" AND Edad_Matriculacion >= 1 AND Edad_Matriculacion <= 18) t6
	ON (t5.login = t6.login AND t5.idGrupo = t6.idGrupo)) t7
LEFT OUTER JOIN
	(SELECT
		login,
		CalifInicial,
		CalifFinal,
		idGrupo
	FROM
		CalifDatos
	WHERE
		idCiclo = 11 AND idPrograma = 2 AND sexo = "M" AND Edad_Matriculacion >= 1 AND Edad_Matriculacion <= 18) t8
ON (t7.login = t8.login AND t7.idGrupo = t8.idGrupo)

----------------------------------------------Consulta de avances con datos de p2 y p9 en ciclos 10 y 11------------------------------------------------------------

SELECT 
	t7.login,
	t7.nombreUsuario,
	t7.apellidoPaterno,
	t7.apellidoMaterno,
	t7.sexo,
	t7.Edad_Matriculacion,
	t7.Avance_P9_ciclo10,
	t7.Avance_P2_ciclo10,
	t7.Avance_P9_ciclo11,
	t8.Avance as `Avance_P2_ciclo11`,
	t7.idciclo,
	t7.idprograma,
	t7.idGrupo
FROM
	(SELECT 
		t5.login,
		t5.nombreUsuario,
		t5.apellidoPaterno,
		t5.apellidoMaterno,
		t5.sexo,
		t5.Edad_Matriculacion,
		t5.Avance_P9_ciclo10,
		t5.Avance_P2_ciclo10,
		t6.Avance as `Avance_P9_ciclo11`,
		t5.idciclo,
		t5.idprograma,
		t5.idGrupo
	FROM
		(SELECT
			t3.login,
			t3.nombreUsuario,
			t3.apellidoPaterno,
			t3.apellidoMaterno,
			t3.sexo,
			t3.Edad_Matriculacion,
			t3.Avance_P9_ciclo10,
			t4.Avance as `Avance_P2_ciclo10`,
			t3.idciclo,
			t3.idprograma,
			t3.idGrupo
		FROM
			(SELECT
				t1.login,
				t1.nombreUsuario,
				t1.apellidoPaterno,
				t1.apellidoMaterno,
				t1.sexo,
				t1.Edad_Matriculacion,
				t2.Avance as `Avance_P9_ciclo10`,
				t1.idprograma,
				t1.idGrupo
			FROM
				(SELECT
					login,
					nombreUsuario,
					apellidoPaterno,
					apellidoMaterno,
					sexo,
					Edad_Matriculacion,
					idciclo,
					idprograma,
					idGrupo
				FROM CalifDatos
				WHERE idCiclo >= 10 AND idCiclo <= 11 AND(idPrograma = 9 OR idPrograma = 2) AND sexo = "M" AND Edad_Matriculacion >= 1 AND Edad_Matriculacion <= 18) t1
			LEFT OUTER JOIN 
				(SELECT
					login,
					Avance,
					idGrupo
				FROM
					CalifDatos
				WHERE
					idCiclo = 10 AND idPrograma = 9 AND sexo = "M" AND Edad_Matriculacion >= 1 AND Edad_Matriculacion <= 18) t2
			ON (t1.login = t2.login AND t1.idGrupo = t2.idGrupo)) t3
		LEFT OUTER JOIN
			(SELECT
				login,
				Avance,
				idGrupo
			FROM
				CalifDatos
			WHERE
				idCiclo = 10 AND idPrograma = 2 AND sexo = "M" AND Edad_Matriculacion >= 1 AND Edad_Matriculacion <= 18) t4
		ON (t3.login = t4.login AND t3.idGrupo = t4.idGrupo)) t5
	LEFT OUTER JOIN
		(SELECT
			login,
			Avance,
			idGrupo
		FROM
			CalifDatos
		WHERE
			idCiclo = 11 AND idPrograma = 9 AND sexo = "M" AND Edad_Matriculacion >= 1 AND Edad_Matriculacion <= 18) t6
	ON (t5.login = t6.login AND t5.idGrupo = t6.idGrupo)) t7
LEFT OUTER JOIN
	(SELECT
		login,
		Avance,
		idGrupo
	FROM
		CalifDatos
	WHERE
		idCiclo = 11 AND idPrograma = 2 AND sexo = "M" AND Edad_Matriculacion >= 1 AND Edad_Matriculacion <= 18) t8
ON (t7.login = t8.login AND t7.idGrupo = t8.idGrupo)