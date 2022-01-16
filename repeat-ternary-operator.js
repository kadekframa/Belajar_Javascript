// Ternary Operator pada JavaScript

// Ternary operator adalah bentuk sederhana dari if statement.


const nilai = 75;
let ucapan;

if(nilai >=75){                             // bentuk if statement biasa.
    ucapan = "Selamat Anda Lulus"
}else{
    ucapan = "Tetap Semangat"
}

document.writeln(`<p>${ucapan}</p>`);       // menampilkan pada windows browser.


const ucapannya = nilai >=80 ? "Selamat anda lulus yaa!" : "Silahkan Coba Lagi, Tetap Semangat!";       // contoh penggunaan ternary operator. Lebih simple dan sederhana.
document.writeln(`<p>${ucapannya}</p>`);    // menampilkan pada windows browser.