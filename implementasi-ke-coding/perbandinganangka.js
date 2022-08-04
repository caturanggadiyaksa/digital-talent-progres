/*  PERBANDINGAN DUA ANGKA  */
function perbandinganAngka(){

    


    //variable untuk menampung angka pertama
    const angkaPertama = prompt("Masukan Angka pertama:");

    //variable untuk menampung angka kedua
    const angkaKedua = prompt("Masukan Angka kedua:");


    //varibale untuk menampung hasil
    var hasil;



    //Menggunakan IF untuk membandingkan kedua angka
    if ( angkaPertama > angkaKedua ) {
        hasil = "Bilangan Angka Pertama Lebih Besar";

    } else if ( angkaPertama < angkaKedua ) {
        hasil = "Bilangan Angka Kedua Lebih Besar";
    } else {
        hasil = "Kedua bilangan sama besar";
    }

    //mengeluarkan hasil agar tampil di browser
    alert(`Hasil Perbandingan Dari Angka Pertama :${angkaPertama} dan Angka Kedua:${angkaKedua} Yaitu = ${hasil}`);



}


