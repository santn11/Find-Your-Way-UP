drop database if exists usuario;
create database usuario;
use usuario;

create table usuario (
id	    		int	 		primary key		auto_increment 	unique 	not null,
nome			varchar(30)	not null,
email 			varchar(60) not null,
password		varchar(20)	not null,
con_password	varchar(20)	not null
);

create table teste (
id	    		int 			primary key 	auto_increment 	unique 	not null,
id_user			int 			not null,
area_result		varchar(30) 	not null,
porcent_result  int				not null,
foreign key(id_user) references usuario(id)
);
