CREATE DATABASE perntodo;

CREATE TABLE todo(
  id_todo SERIAL PRIMARY KEY,
  description VARCHAR(255),
  important BOOLEAN NOT NULL,
  done BOOLEAN NOT NULL
);
