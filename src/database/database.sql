create database NodePr
go
use Nodepr
go
create table Products(
id int primary key identity,
namepr varchar(50) not null,
description text not null,
price money not null,
quantity int not null
)