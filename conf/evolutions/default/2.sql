# --- !Ups

CREATE TABLE Categories (
  id   UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
  name VARCHAR(50) NOT NULL
);

CREATE TABLE Subcategories (
  id       UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
  name     VARCHAR(50) NOT NULL,
  category UUID        NOT NULL,
  CONSTRAINT subcategory_category FOREIGN KEY (category) REFERENCES Categories (id) ON DELETE CASCADE
);

CREATE TABLE Products (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
  name        VARCHAR(255) NOT NULL,
  description TEXT         NOT NULL,
  price       FLOAT        NOT NULL,
  rating      FLOAT        NOT NULL,
  category    UUID         NOT NULL,
  imageLink   VARCHAR(255) NOT NULL,
  CONSTRAINT product_category FOREIGN KEY (category) REFERENCES Subcategories (id) ON DELETE RESTRICT
);

CREATE TABLE Reviews (
  id      UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
  COMMENT TEXT,
  product UUID  NOT NULL,
  CONSTRAINT review_product FOREIGN KEY (product) REFERENCES Products (id) ON DELETE CASCADE
);

# --- !Downs

DROP TABLE Reviews;
DROP TABLE Products;
DROP TABLE Subcategories;
DROP TABLE Categories;