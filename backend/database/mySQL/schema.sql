/*
* Execute this file from the command line by typing:
* mysql -u <USER> < backend/database/mySQL/schema.sql
* OR
* mysql -u <USER> < backend/database/mySQL/schema.sql
*/

  DROP DATABASE IF EXISTS YOUR_DATABASE_NAME;

  CREATE DATABASE YOUR_DATABASE_NAME;
  use YOUR_DATABASE_NAME;

  CREATE TABLE YOUR_TABLE_NAME (
  id INTEGER NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id)
  );