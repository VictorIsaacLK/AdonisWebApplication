---levantar el servidor----
node ace serve --watch 

---cuando al momento de correr las migraciones dice que update_at es un valor no valido----
mysql -u root -p
show variables like 'sql_mode' ;
set global sql_mode = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

----IMPORTANTE: Justo despues de las migraciones, se usa para plantar datos default---
node ace db:seed

----Para mandar mensaje SMS en el registro-----
npm install @vonage/server-sdk


----Comentar cosas en español---
Shift + Alt + A
