# --- !Ups

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREaTE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE Roles (
  id UUID primary key default uuid_generate_v1(),
  roleName varchar(255) not null
);

CREATE TABLE Users (
  id UUID primary key default uuid_generate_v1(),
  firstName varchar(255) not null,
  lastName varchar(255) not null,
  email varchar(255) not null unique,
  phoneNumber varchar(50) not null,
  role UUID not null,
  password text not null,
  constraint user_role_fk
  foreign key (role)
  REFERENCES Roles(id)

);

# --- !Downs


DROP TABLE Users;
DROP TABLE Roles;