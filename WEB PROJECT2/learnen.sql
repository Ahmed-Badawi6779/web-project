create database learnen;
use learnen;



create table if not exists eventlocal(
keyname varchar(50) not null,
keyvalue varchar(10) not null,
pressdate date
);



drop table eventlocal;
select * from eventlocal;