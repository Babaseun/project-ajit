create table users(
id text primary key not null unique,
firstName text not null,
lastName text not null,
email text not null unique,
password text not null,
role text not null,
createdAt datetime,
updatedAt datetime
);

create table products(
id text primary key not null unique,
description text,
price integer,
owner_id text,
createdAt datetime,
updatedAt datetime
foreign key (owner_id) references users (id) on delete cascade
);

