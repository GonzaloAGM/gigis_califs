CREATE TABLE `gigisplayhousebd_v4`.`ciclos` 
(
    `idCiclo` CHAR(4) NOT NULL ,
    `fechaInicial` DATE NOT NULL , 
    `fechaFinal` DATE NOT NULL
)
ENGINE = InnoDB;
ALTER TABLE `ciclos` 
ADD CONSTRAINT `llave_ciclos` 
PRIMARY KEY (`idCiclo`); 

CREATE TABLE `gigisplayhousebd_v4`.`programas` 
( 
    `idPrograma` CHAR(4) NOT NULL , 
    `nombrePrograma` VARCHAR(50) NOT NULL , 
    `puntajeMaximo` INT NOT NULL , 
    `dirImagen` VARCHAR(100) NULL
) 
ENGINE = InnoDB;
ALTER TABLE `programas` 
ADD CONSTRAINT `llave_programas` 
PRIMARY KEY (`idPrograma`); 

CREATE TABLE `gigisplayhousebd_v4`.`niveles` 
(
    `idNivel` CHAR(4) NOT NULL , 
    `nombreNivel` VARCHAR(50) NOT NULL , 
    `idPrograma` CHAR(4) NOT NULL
) 
ENGINE = InnoDB;
ALTER TABLE `niveles` 
ADD CONSTRAINT `llave_niveles` 
PRIMARY KEY (`idNivel`); 

CREATE TABLE `gigisplayhousebd_v4`.`objetivos` 
(
    `idNivel` CHAR(4) NOT NULL , 
    `idObjetivo` CHAR(4) NOT NULL , 
    `descripcion` VARCHAR(200) NOT NULL , 
    `fechaRegistroObj` CHAR(1) NOT NULL
) 
ENGINE = InnoDB;
ALTER TABLE `objetivos` 
ADD CONSTRAINT `llave_objetivos` 
PRIMARY KEY (`idNivel`, `idObjetivo`);

CREATE TABLE `gigisplayhousebd_v4`.`funciones` 
( 
    `idFuncion` CHAR(3) NOT NULL , 
    `requisitoFuncional` VARCHAR(50) NOT NULL
) 
ENGINE = InnoDB;
ALTER TABLE `funciones` 
ADD CONSTRAINT `llave_funciones` 
PRIMARY KEY (`idFuncion`); 

CREATE TABLE `gigisplayhousebd_v4`.`roles` 
( 
    `idRol` CHAR(3) NOT NULL , 
    `nombre` VARCHAR(30) NOT NULL
) 
ENGINE = InnoDB;
ALTER TABLE `roles` 
ADD CONSTRAINT `llave_roles` 
PRIMARY KEY (`idRol`); 

CREATE TABLE `gigisplayhousebd_v4`.`usuarios` 
( 
    `login` VARCHAR(50) NOT NULL , 
    `password` VARCHAR(30) NOT NULL , 
    `nombreUsuario` VARCHAR(50) NULL , 
    `apellidoPaterno` VARCHAR(50) NULL , 
    `apellidoMaterno` VARCHAR(50) NULL
) 
ENGINE = InnoDB;
ALTER TABLE `usuarios` 
ADD CONSTRAINT `llave_usuarios` 
PRIMARY KEY (`login`);

CREATE TABLE `gigisplayhousebd_v4`.`terapeutas` 
( 
    `login` VARCHAR(50) NOT NULL , 
    `titulo` VARCHAR(50) NULL , 
    `cv` VARCHAR(50) NULL , 
    `estatus` CHAR(1) NOT NULL
) 
ENGINE = InnoDB;
ALTER TABLE `terapeutas` 
ADD CONSTRAINT `llave_terapeutas` 
PRIMARY KEY (`login`); 

CREATE TABLE `gigisplayhousebd_v4`.`participantes` 
( 
    `login` VARCHAR(50) NOT NULL , 
    `sexo` CHAR(1) NOT NULL , 
    `fechaNacimiento` DATE NOT NULL , 
    `edad` INT NOT NULL , 
    `telefonoPadre` INT NULL
) 
ENGINE = InnoDB;
ALTER TABLE `participantes` 
ADD CONSTRAINT `llave_participantes` 
PRIMARY KEY (`login`);  

CREATE TABLE `gigisplayhousebd_v4`.`grupos` 
(
    `idGrupo` CHAR(4) NOT NULL , 
    `numeroGrupo` INT NOT NULL , 
    `idPrograma` CHAR(4) NOT NULL , 
    `idCiclo` CHAR(4) NOT NULL
) 
ENGINE = InnoDB;
ALTER TABLE `grupos` 
ADD CONSTRAINT `llave_grupos` 
PRIMARY KEY (`idGrupo`); 

CREATE TABLE `gigisplayhousebd_v4`.`roles_funciones` 
( 
    `idRol` CHAR(3) NOT NULL , 
    `idfuncion` CHAR(3) NOT NULL , 
    `fechaRF` DATE NOT NULL

) 
ENGINE = InnoDB;
ALTER TABLE `roles_funciones` 
ADD CONSTRAINT `llave_roles_funciones` 
PRIMARY KEY  (`idRol`, `idfuncion`);

CREATE TABLE `gigisplayhousebd_v4`.`usuarios_roles`  
( 
    `login` VARCHAR(50) NOT NULL , 
    `idRol` CHAR(4) NOT NULL , 
    `fechaUR` DATE NOT NULL
) 
ENGINE = InnoDB;
ALTER TABLE `usuarios_roles` 
ADD CONSTRAINT `llave_usuarios_roles` 
PRIMARY KEY  (`login`, `idRol`);

CREATE TABLE `gigisplayhousebd_v4`.`grupos_terapeutas` 
( 
    `idGrupo` CHAR(4) NOT NULL , 
    `login` VARCHAR(50) NOT NULL , 
    `fechaAsignacion` DATE NOT NULL
) 
ENGINE = InnoDB;
ALTER TABLE `grupos_terapeutas` 
ADD CONSTRAINT `llave_grupos_terapeutas` 
PRIMARY KEY (`idGrupo`, `login`); 

CREATE TABLE `gigisplayhousebd_v4`.`participantes_grupos_objetivo` 
( 
    `login` VARCHAR(50) NOT NULL , 
    `idGrupo` CHAR(4) NOT NULL , 
    `idNivel` CHAR(4) NOT NULL , 
    `idObjetivo` CHAR(4) NOT NULL , 
    `puntajeInicial` INT NULL , 
    `puntajeFinal` INT NULL

) 
ENGINE = InnoDB;
ALTER TABLE `participantes_grupos_objetivo` 
ADD CONSTRAINT `llave_puntajes` 
PRIMARY KEY  (`login`, `idGrupo`, `idNivel`, `idObjetivo`);

ALTER TABLE `niveles` 
ADD CONSTRAINT `cfniveles_idprograma_programas` 
FOREIGN KEY (`idPrograma`) 
REFERENCES `programas`(`idPrograma`) 
ON DELETE CASCADE 
ON UPDATE CASCADE;

ALTER TABLE `objetivos` 
ADD CONSTRAINT `cfobjetivos_idNivel_niveles` 
FOREIGN KEY (`idNivel`) 
REFERENCES `niveles`(`idNivel`) 
ON DELETE CASCADE 
ON UPDATE CASCADE;

ALTER TABLE `roles_funciones` 
ADD CONSTRAINT `cfroles_funciones_idFuncion_funciones` 
FOREIGN KEY (`idFuncion`) 
REFERENCES `funciones`(`idFuncion`) 
ON DELETE CASCADE
ON UPDATE CASCADE;

ALTER TABLE `roles_funciones` 
ADD CONSTRAINT `cfroles_funciones_idRol_roles` 
FOREIGN KEY (`idRol`) 
REFERENCES `roles`(`idRol`) 
ON DELETE CASCADE
ON UPDATE CASCADE;

ALTER TABLE `usuarios_roles` 
ADD CONSTRAINT `cfusuarios_roles_login_usuarios` 
FOREIGN KEY (`login`) 
REFERENCES `usuarios`(`login`) 
ON DELETE CASCADE
ON UPDATE CASCADE;

ALTER TABLE `usuarios_roles` 
ADD CONSTRAINT `cfusuarios_roles_idRol_roles` 
FOREIGN KEY (`idRol`) 
REFERENCES `roles`(`idRol`) 
ON DELETE CASCADE
ON UPDATE CASCADE;

ALTER TABLE `terapeutas` 
ADD CONSTRAINT `cfterapeutas_login_usuarios` 
FOREIGN KEY (`login`) 
REFERENCES `usuarios`(`login`) 
ON DELETE RESTRICT 
ON UPDATE RESTRICT;

ALTER TABLE `participantes` 
ADD CONSTRAINT `cfparticipantes_login_usuarios` 
FOREIGN KEY (`login`) 
REFERENCES `usuarios`(`login`) 
ON DELETE RESTRICT
ON UPDATE RESTRICT;

ALTER TABLE `grupos` 
ADD CONSTRAINT `cfgrupos_idprograma_programas` 
FOREIGN KEY (`idPrograma`) 
REFERENCES `programas`(`idPrograma`) 
ON DELETE CASCADE 
ON UPDATE CASCADE;

ALTER TABLE `grupos` 
ADD CONSTRAINT `cfgrupos_idciclo_cicloss` 
FOREIGN KEY (`idCiclo`) 
REFERENCES `ciclos`(`idCiclo`) 
ON DELETE CASCADE 
ON UPDATE CASCADE;

ALTER TABLE `grupos_terapeutas` 
ADD CONSTRAINT `cfgrupos_terapeutas_idGrupo_grupos` 
FOREIGN KEY (`idGrupo`) 
REFERENCES `grupos`(`idGrupo`) 
ON DELETE CASCADE
ON UPDATE CASCADE;

ALTER TABLE `grupos_terapeutas` 
ADD CONSTRAINT `cfgrupos_terapeutas_login_terapeutas` 
FOREIGN KEY (`login`) 
REFERENCES `terapeutas`(`login`) 
ON DELETE CASCADE
ON UPDATE CASCADE;

ALTER TABLE `participantes_grupos_objetivo` 
ADD CONSTRAINT `cfpuntajes_login_participantes` 
FOREIGN KEY (`login`) 
REFERENCES `participantes`(`login`) 
ON DELETE CASCADE
ON UPDATE CASCADE;

ALTER TABLE `participantes_grupos_objetivo` 
ADD CONSTRAINT `cfpuntajes_idGrupo_grupos` 
FOREIGN KEY (`idGrupo`) 
REFERENCES `grupos`(`idGrupo`) 
ON DELETE CASCADE
ON UPDATE CASCADE;

ALTER TABLE `participantes_grupos_objetivo` 
ADD CONSTRAINT `cfpuntajes_idObjetivo_objetivos` 
FOREIGN KEY (`idNivel`, `idObjetivo`) 
REFERENCES `objetivos`(`idNivel`, `idObjetivo`) 
ON DELETE RESTRICT 
ON UPDATE RESTRICT;
