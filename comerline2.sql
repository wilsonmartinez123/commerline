SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL';

CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci ;
SHOW WARNINGS;
USE `mydb`;

-- -----------------------------------------------------
-- Table `mydb`.`estadoproducto`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`estadoproducto` ;

SHOW WARNINGS;
CREATE  TABLE IF NOT EXISTS `estadoproducto` (
  `idestadoproducto` INT NULL AUTO_INCREMENT ,
  `tiempo_estado` VARCHAR(45) NULL ,
  `estado_estado` VARCHAR(45) NULL ,
  `descuento_estado` VARCHAR(45) NULL ,
  PRIMARY KEY (`idestadoproducto`) )
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `mydb`.`categoriaempresa`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`categoriaempresa` ;

SHOW WARNINGS;
CREATE  TABLE IF NOT EXISTS `categoriaempresa` (
  `idcategoriaempresa` INT NULL AUTO_INCREMENT ,
  `nombre_empresa` VARCHAR(45) NULL ,
  PRIMARY KEY (`idcategoriaempresa`) )
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `mydb`.`ubicacion`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`ubicacion` ;

SHOW WARNINGS;
CREATE  TABLE IF NOT EXISTS `ubicacion` (
  `idubicacion` INT NULL AUTO_INCREMENT ,
  `coordenadas_ubicacion` VARCHAR(45) NULL ,
  `ubicacion_usuario_ubicacion` VARCHAR(45) NULL ,
  `ubicacion_empresario` VARCHAR(45) NULL ,
  PRIMARY KEY (`idubicacion`) )
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `mydb`.`empresa`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`empresa` ;

SHOW WARNINGS;
CREATE  TABLE IF NOT EXISTS `empresa` (
  `idempresa` INT NULL AUTO_INCREMENT ,
  `nombre_empresa` VARCHAR(20) NULL ,
  `descripcion_empresa` VARCHAR(20) NULL ,
  `telefono_empresa` VARCHAR(20) NULL ,
  `logo_empresa` VARCHAR(20) NULL ,
  `correo_empresa` VARCHAR(25) NULL ,
  `categoriaempresa_idcategoriaempresa` INT NULL ,
  `ubicacion_idubicacion` INT NULL ,
  PRIMARY KEY (`idempresa`) ,
  CONSTRAINT `fk_empresa_categoriaempresa1`
    FOREIGN KEY (`categoriaempresa_idcategoriaempresa` )
    REFERENCES `categoriaempresa` (`idcategoriaempresa` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_empresa_ubicacion1`
    FOREIGN KEY (`ubicacion_idubicacion` )
    REFERENCES `ubicacion` (`idubicacion` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;
CREATE INDEX `fk_empresa_categoriaempresa1` ON `empresa` (`categoriaempresa_idcategoriaempresa` ASC) ;

SHOW WARNINGS;
CREATE INDEX `fk_empresa_ubicacion1` ON `empresa` (`ubicacion_idubicacion` ASC) ;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `mydb`.`producto`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`producto` ;

SHOW WARNINGS;
CREATE  TABLE IF NOT EXISTS `producto` (
  `idproducto` INT NULL AUTO_INCREMENT ,
  `nombre_producto` VARCHAR(20) NULL ,
  `precio_producto` VARCHAR(20) NULL ,
  `imagen_producto` VARCHAR(20) NULL ,
  `descripcion_producto` VARCHAR(20) NULL ,
  `estadoproducto_idestadoproducto` INT NULL ,
  `empresa_idempresa` INT NOT NULL ,
  PRIMARY KEY (`idproducto`, `empresa_idempresa`) ,
  CONSTRAINT `fk_producto_estadoproducto`
    FOREIGN KEY (`estadoproducto_idestadoproducto` )
    REFERENCES `estadoproducto` (`idestadoproducto` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_producto_empresa1`
    FOREIGN KEY (`empresa_idempresa` )
    REFERENCES `empresa` (`idempresa` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;
CREATE INDEX `fk_producto_estadoproducto` ON `producto` (`estadoproducto_idestadoproducto` ASC) ;

SHOW WARNINGS;
CREATE INDEX `fk_producto_empresa1` ON `producto` (`empresa_idempresa` ASC) ;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `mydb`.`usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`usuario` ;

SHOW WARNINGS;
CREATE  TABLE IF NOT EXISTS `usuario` (
  `idusuario` INT NULL AUTO_INCREMENT ,
  `correo_usuario` VARCHAR(20) NULL ,
  `contraseña_usuario` VARCHAR(20) NULL ,
  `ubicacion_idubicacion` INT NULL ,
  PRIMARY KEY (`idusuario`) ,
  CONSTRAINT `fk_usuario_ubicacion1`
    FOREIGN KEY (`ubicacion_idubicacion` )
    REFERENCES `ubicacion` (`idubicacion` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;
CREATE INDEX `fk_usuario_ubicacion1` ON `usuario` (`ubicacion_idubicacion` ASC) ;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `mydb`.`sucursal`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`sucursal` ;

SHOW WARNINGS;
CREATE  TABLE IF NOT EXISTS `sucursal` (
  `idsucursal` INT NULL AUTO_INCREMENT ,
  `nombre_sucursal` VARCHAR(45) NULL ,
  `ubicacion_sucursal` VARCHAR(45) NULL ,
  `telefono_sucursal` VARCHAR(45) NULL ,
  `empresa_idempresa` INT NULL ,
  PRIMARY KEY (`idsucursal`) ,
  CONSTRAINT `fk_sucursal_empresa1`
    FOREIGN KEY (`empresa_idempresa` )
    REFERENCES `empresa` (`idempresa` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;
CREATE INDEX `fk_sucursal_empresa1` ON `sucursal` (`empresa_idempresa` ASC) ;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `mydb`.`empresario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`empresario` ;

SHOW WARNINGS;
CREATE  TABLE IF NOT EXISTS `empresario` (
  `idempresario` INT NULL AUTO_INCREMENT ,
  `nombre_empresario` VARCHAR(45) NULL ,
  `correo_empresario` VARCHAR(45) NULL ,
  `telefono_empresario` VARCHAR(45) NULL ,
  `contraseña_empresario` VARCHAR(45) NULL ,
  `empresa_idempresa` INT NULL ,
  PRIMARY KEY (`idempresario`) ,
  CONSTRAINT `fk_empresario_empresa1`
    FOREIGN KEY (`empresa_idempresa` )
    REFERENCES `empresa` (`idempresa` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;
CREATE INDEX `fk_empresario_empresa1` ON `empresario` (`empresa_idempresa` ASC) ;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `mydb`.`administrador`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`administrador` ;

SHOW WARNINGS;
CREATE  TABLE IF NOT EXISTS `administrador` (
  `idadministrador` INT NULL AUTO_INCREMENT ,
  `nombre_administrador` VARCHAR(45) NULL ,
  `contraseña_administradior` VARCHAR(45) NULL ,
  `correo_administrador` VARCHAR(45) NULL ,
  PRIMARY KEY (`idadministrador`) )
ENGINE = InnoDB;

SHOW WARNINGS;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
