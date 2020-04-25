DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
  name VARCHAR(30) NOT NULL,
  department_id INTEGER(10) PRIMARY KEY
);
CREATE TABLE role (
  role_id INTEGER(10) PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(30) NOT NULL,
 department_id INTEGER(10) 
 
);
CREATE TABLE employee (
  employee_id INTEGER(10) PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER(10),
  manager_id INTEGER(10) 
);

