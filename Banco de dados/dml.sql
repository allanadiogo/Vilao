use vilaoDB;

select * from tb_vilao;

insert into tb_vilao (nm_vilao, ds_maldades, bt_super_poder )
	  values('Malevola','Deu sonifero para Bela', true );
      
select id_vilao,
       nm_vilao,
       ds_maldades,
       bt_super_poder 
from tb_vilao
   
   