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

insert into categories values('56713fcd-d908-45fc-9cff-200218d71ea2', 'Miscellaneous');
insert into categories values('1e48b185-97c3-44a1-8ac9-40fc80cabe5f', 'Art');
insert into categories values('dd982ddd-29c2-41a6-b5e0-0b104c6ce28b', 'Electronics');
insert into categories values('b8b897e1-6cea-4738-836e-45a0b14f2348', 'Clothing');
insert into categories values('a56dad25-bfad-417f-8e73-df0d29e6542c', 'Sports');

insert into subcategories values('082a8fd5-4a76-4206-af69-4ac39c3a31a9', 'Pocket Knives', '56713fcd-d908-45fc-9cff-200218d71ea2');
insert into subcategories values('22d973d1-b833-48f2-b95e-80684201cc1c', 'Magazines', '56713fcd-d908-45fc-9cff-200218d71ea2');
insert into subcategories values('4cbdc96a-5596-4454-a8b1-671ce68ae7e5', 'Binoculars', '56713fcd-d908-45fc-9cff-200218d71ea2');

insert into subcategories values('76f44040-351b-48e3-a2c7-37394d5990ef', 'Drawings', '1e48b185-97c3-44a1-8ac9-40fc80cabe5f');
insert into subcategories values('7c8d2a99-1eb5-4054-a6eb-1bc83efab7b5', 'Paintings', '1e48b185-97c3-44a1-8ac9-40fc80cabe5f');
insert into subcategories values('6a7240fa-06f4-4ac8-9266-e375c5db1035', 'Photography', '1e48b185-97c3-44a1-8ac9-40fc80cabe5f');

insert into subcategories values('a03fbe69-c202-476e-ba28-649b09ac3fd3', 'Computers', 'dd982ddd-29c2-41a6-b5e0-0b104c6ce28b');
insert into subcategories values('58585aaf-82a1-419e-99ad-9c387d30a6c3', 'Home Electronics', 'dd982ddd-29c2-41a6-b5e0-0b104c6ce28b');
insert into subcategories values('3657d1f0-a4db-4ced-b01f-58ed995c87a1', 'Personal Electronics', 'dd982ddd-29c2-41a6-b5e0-0b104c6ce28b');

insert into subcategories values('6ae59220-c6b3-4140-b1b0-8a7079b6aec7', 'Children''s Clothing', 'b8b897e1-6cea-4738-836e-45a0b14f2348');
insert into subcategories values('8d6ed5b3-7c2f-432f-ab92-e04bf6b6f32f', 'Men''s Clothing', 'b8b897e1-6cea-4738-836e-45a0b14f2348');
insert into subcategories values('704d879c-bb88-4be6-ae22-c6ed3b241230', 'Women''s Clothing', 'b8b897e1-6cea-4738-836e-45a0b14f2348');

insert into subcategories values('458937e5-c057-4c1b-a8a4-d5713637f3a2', 'Equipment', 'a56dad25-bfad-417f-8e73-df0d29e6542c');
insert into subcategories values('dabf1677-92ce-4139-b3d4-342ccdb68d98', 'Cards', 'a56dad25-bfad-417f-8e73-df0d29e6542c');

insert into products
values(uuid_generate_v1(), 'Dell XPS 13', 'The smallest 13.3-inch laptop on the planet has the world’s first virtually borderless InfinityEdge display and the latest Intel® processors. Touch, Silver, and Rose Gold options available.'
  , 3000, 4.5, 'a03fbe69-c202-476e-ba28-649b09ac3fd3', 'https://static.bhphoto.com/images/images500x500/dell_xps9360_7697slv_xps_i7_7560u_16gb_512ssd_1504110098000_1358390.jpg');


insert into products
values(uuid_generate_v1(), 'Red Single Blade', 'Pocket Knife W/ Corkscrew'
  , 10, 3.5, '082a8fd5-4a76-4206-af69-4ac39c3a31a9', 'https://images-na.ssl-images-amazon.com/images/I/61ml0mAQw%2BL._SY355_.jpg');


insert into products
values(uuid_generate_v1(), 'Barnyard Chicken', 'Painting Opulent Frame'
  , 166, 4, '7c8d2a99-1eb5-4054-a6eb-1bc83efab7b5', 'https://render.fineartamerica.com/images/rendered/search/print/images/artworkimages/medium/1/barnyard-most-fowl-shannon-grissom.jpg');


# --- !Downs

DROP TABLE Reviews;
DROP TABLE Products;
DROP TABLE Subcategories;
DROP TABLE Categories;