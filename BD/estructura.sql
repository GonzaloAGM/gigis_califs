CREATE TABLE `gigisplayhousebd`.`ciclos` 
(
    `idCiclo` CHAR(4) NOT NULL ,
    `fechaInicial` DATE NOT NULL , 
    `fechaFinal` DATE NOT NULL , 
    PRIMARY KEY (`idCiclo`)
)
ENGINE = InnoDB;

CREATE TABLE `gigisplayhousebd`.`programas` 
( 
    `idPrograma` CHAR(4) NOT NULL , 
    `nombrePrograma` VARCHAR(50) NOT NULL , 
    `puntajeMaximo` INT NOT NULL , 
    `dirImagen` VARCHAR(100) NULL , 
    PRIMARY KEY (`idPrograma`)
) 
ENGINE = InnoDB;

CREATE TABLE `gigisplayhousebd`.`grupos` 
(
    `idGrupo` CHAR(4) NOT NULL , 
    `numeroGrupo` INT NOT NULL , 
    `idPrograma` CHAR(4) NOT NULL , 
    `idCiclo` CHAR(4) NOT NULL , 
    PRIMARY KEY (`idGrupo`),
    FOREIGN KEY(`idPrograma`) REFERENCES `programas`(`idPrograma`)
) 
ENGINE = InnoDB;
--ALTER TABLE `grupos` ADD FOREIGN KEY(`idPrograma`) REFERENCES `programas`(`idPrograma`)

CREATE TABLE `gigisplayhousebd`.`niveles` 
(
    `idNivel` CHAR(4) NOT NULL , 
    `nombreNivel` VARCHAR(50) NOT NULL , 
    `idPrograma` CHAR(4) NOT NULL , 
    PRIMARY KEY (`idPrograma`),
    FOREIGN KEY(`idPrograma`) REFERENCES `programas`(`idPrograma`)
) 
ENGINE = InnoDB;

CREATE TABLE `gigisplayhousebd`.`terapeutas` 
( 
    `login` VARCHAR(50) NOT NULL , 
    `titulo` VARCHAR(50) NULL , 
    `cv` VARCHAR(50) NULL , 
    `estatus` CHAR(1) NOT NULL , 
    PRIMARY KEY (`login`),
    FOREIGN KEY(`login`) REFERENCES `usuarios`(`login`)
) 
ENGINE = InnoDB;

CREATE TABLE `gigisplayhousebd`.`objetivos` 
(
    `idNivel` CHAR(4) NOT NULL , 
    `idObjetivo` CHAR(4) NOT NULL , 
    `descripcion` VARCHAR(200) NOT NULL , 
    `fechaRegistroObj` CHAR(1) NOT NULL , 
    PRIMARY KEY (`idNivel`, `idObjetivo`),
    FOREIGN KEY(`idNivel`) REFERENCES `niveles`(`idNivel`)
) 
ENGINE = InnoDB;

CREATE TABLE `gigisplayhousebd`.`participantes` 
( 
    `login` VARCHAR(50) NOT NULL , 
    `sexo` CHAR(1) NOT NULL , 
    `fechaNacimiento` DATE NOT NULL , 
    `edad` INT NOT NULL , 
    `telefonoPadre` INT NULL , 
    PRIMARY KEY (`login`),
    FOREIGN KEY(`login`) REFERENCES `usuarios`(`login`)
) 
ENGINE = InnoDB;

CREATE TABLE `gigisplayhousebd`.`usuarios` 
( 
    `login` VARCHAR(50) NOT NULL , 
    `password` VARCHAR(30) NOT NULL , 
    `nombreUsuario` VARCHAR(50) NULL , 
    `apellidoPaterno` VARCHAR(50) NULL , 
    `apellidoMaterno` VARCHAR(50) NULL , 
    PRIMARY KEY (`login`)
) 
ENGINE = InnoDB;

CREATE TABLE `gigisplayhousebd`.`roles` 
( 
    `idRol` CHAR(3) NOT NULL , 
    `nombre` VARCHAR(30) NOT NULL , 
    PRIMARY KEY (`idRol`)
) 
ENGINE = InnoDB;

CREATE TABLE `gigisplayhousebd`.`funciones` 
( 
    `idFuncion` CHAR(3) NOT NULL , 
    `requisitoFuncional` VARCHAR(50) NOT NULL , 
    PRIMARY KEY (`idFuncion`)
) 
ENGINE = InnoDB;

CREATE TABLE `gigisplayhousebd`.`grupos_terapeutas` 
( 
    `idGrupo` CHAR(4) NOT NULL , 
    `login` VARCHAR(50) NOT NULL , 
    `fechaAsignacion` DATE NOT NULL , 
    PRIMARY KEY (`idGrupo`, `login`),
    FOREIGN KEY(`idGrupo`) REFERENCES `grupos`(`idGrupo`),
    FOREIGN KEY(`login`) REFERENCES `terapeutas`(`login`)
) 
ENGINE = InnoDB;

CREATE TABLE `gigisplayhousebd`.`participantes_grupos_objetivo` 
( 
    `login` VARCHAR(50) NOT NULL , 
    `idGrupo` CHAR(4) NOT NULL , 
    `idNivel` CHAR(4) NOT NULL , 
    `idObjetivo` CHAR(4) NOT NULL , 
    `puntajeInicial` INT NULL , 
    `puntajeFinal` INT NULL , 
    PRIMARY KEY (`login`, `idGrupo`, `idNivel`, `idObjetivo`),
    FOREIGN KEY(`login`) REFERENCES `participantes`(`login`),
    FOREIGN KEY(`idGrupo`) REFERENCES `grupos`(`idGrupo`),

) 
ENGINE = InnoDB;
ALTER TABLE `participantes_grupos_objetivo` 
ADD CONSTRAINT `cfpuntajesidObjetivoobjetivos` 
FOREIGN KEY (`idNivel`, `idObjetivo`) 
REFERENCES `objetivos`(`idNivel`, `idObjetivo`) 
ON DELETE RESTRICT 
ON UPDATE RESTRICT;

CREATE TABLE `gigisplayhousebd`.`participantes_grupos_objetivo` 
( 
    `login` VARCHAR(50) NOT NULL , 
    `idGrupo` CHAR(4) NOT NULL , 
    `idNivel` CHAR(4) NOT NULL , 
    `idObjetivo` CHAR(4) NOT NULL , 
    `puntajeInicial` INT NULL , 
    `puntajeFinal` INT NULL , 
    PRIMARY KEY (`login`, `idGrupo`, `idNivel`, `idObjetivo`),
    FOREIGN KEY(`login`) REFERENCES `participantes`(`login`),
    FOREIGN KEY(`idGrupo`) REFERENCES `grupos`(`idGrupo`),
    FOREIGN KEY(`idNivel idObjetivo`) REFERENCES `objetivos`(`idNivel idObjetivo`)

) 
ENGINE = InnoDB;

CREATE TABLE `gigisplayhousebd`.`usuarios_roles`  
( 
    `login` VARCHAR(50) NOT NULL , 
    `idRol` CHAR(4) NOT NULL , 
    `fechaUR` DATE NOT NULL , 
    PRIMARY KEY (`login`, `idRol`),
    FOREIGN KEY(`login`) REFERENCES `usuarios` (`login`),
    FOREIGN KEY(`idRol`) REFERENCES `roles` (`idRol`)
) 
ENGINE = InnoDB;

CREATE TABLE `gigisplayhousebd`.`roles_funciones` 
( 
    `idRol` CHAR(3) NOT NULL , 
    `idfuncion` CHAR(3) NOT NULL , 
    `fechaRF` DATE NOT NULL , 
    PRIMARY KEY (`idRol`, `idfuncion`),
    FOREIGN KEY(`idRol`) REFERENCES `roles` (`idRol`),
    FOREIGN KEY(`idfuncion`) REFERENCES `funciones` (`idfuncion`)

) 
ENGINE = InnoDB;




