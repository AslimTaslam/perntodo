CREATE DATABASE perntodo;

CREATE TABLE todo(
  id_todo SERIAL PRIMARY KEY,
  description VARCHAR(255),
  important BOOLEAN NULL DEFAULT false,
  done BOOLEAN NOT NULL DEFAULT false
);
