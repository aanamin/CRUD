# upgrading or lea - CRUD

1. clone repo ini di pc/laptop teman-teman, jalankan di terminal `git clone https://github.com/aanamin/CRUD.git`
2. install dependensi aplikasinya, jalankan di terminal `npm install`
3. tambahkan database nya dengan mengimport file sql yang ada di repo ini `lea-or14-crud.sql` di phpmyadmin yang sudah terinstall sebelumnya, sesuaikan juga nama database dengan yang ada di file `.env`, tepatnya pada bagian `DB_NAME`
4. jalankan aplikasi dengan perintah `npm start` pada terminal
5. akses dengan app postman, dengan url `localhost:3000`
6. akses sesuai dengan url route, misal untuk menampilkan kategori, masukkan url `localhost:3000/kategori` dengan method get
<img src='./img/route.png' >
<img src='./img/postman-tampil-kategori.png' >

7. begitu juga dengan tambah kategori, jangan lupa sesuaikan method nya pada postman. pada tambah kategori, kita menggunakan method post, 

<img src='./img/route-kategori.png' >
isikan juga data pada bagian body, pilih yang 'x-www-form-urlencoded'
<img src='./img/postman-tambah-kategori.png' >

8. begitu juga dengan yang lainnya, contahnya edit, masukkan parameternya, yaitu id kategori
<img src='./img/postman-update-kategori-params.png' >
masukkan juga data yang ingin dikirmkan pada body
<img src='./img/postman-update-kategori-body.png' >

9. silahkan dicoba yang lainnya

