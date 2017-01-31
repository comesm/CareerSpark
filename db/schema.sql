-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Users'
--
-- ---

DROP TABLE IF EXISTS `Users`;

CREATE TABLE `Users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `phone` INTEGER NULL DEFAULT NULL,
  `username` VARCHAR NULL DEFAULT NULL,
  `firstName` VARCHAR NULL DEFAULT NULL,
  `lastName` VARCHAR NULL DEFAULT NULL,
  `location` VARCHAR NULL DEFAULT NULL,
  `image` BLOB NULL DEFAULT NULL,
  `company` VARCHAR NULL DEFAULT NULL,
  `field` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Connections'
--
-- ---

DROP TABLE IF EXISTS `Connections`;

CREATE TABLE `Connections` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `user1_id` INTEGER NULL DEFAULT NULL,
  `user2_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `Connections` ADD FOREIGN KEY (user1_id) REFERENCES `Users` (`id`);
ALTER TABLE `Connections` ADD FOREIGN KEY (user2_id) REFERENCES `Users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Connections` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Users` (`id`,`username`,`firstName`,`lastName`,`location`,`image`,`company`,`field`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `Connections` (`id`,`user1_id`,`user2_id`) VALUES
-- ('','','');