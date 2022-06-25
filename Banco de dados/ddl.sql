create database vilaoDB;

use vilaoDB;

select * from tb_vilao;

delete from tb_vilao where id_vilao = 12 ;

drop table tb_vilao;

create table tb_vilao(
id_vilao int primary key auto_increment,
nm_vilao varchar(100),
ds_maldades varchar(200),
bt_super_poder boolean
);