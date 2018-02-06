# --- !Ups

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
  foreign key(role) references Roles(id) on delete restrict
);

# --- !Downs

DROP TABLE Users;
DROP TABLE Roles;