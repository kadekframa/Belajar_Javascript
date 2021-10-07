// Ternary Operator adalah bentuk sederhana dari if statement.

// contoh 1
const nilai = 94;
let ucapan;

    // If statement seperti biasanya.
    if(nilai > 75){
        ucapan = "Selamat Anda Lulus!";
    }else{
        ucapan = "Silahkan Coba Lagi dan Tetap Semangat!!!"
    }

    document.writeln(`<p>${ucapan}</p>`);

    // ternary operator. Dapat digunakan untuk menyederhanakan bentuk kondisi dari if statement.
    ucapan = nilai > 75 ? "Selamat Anda Lulus! ('ternary operator')" : "Silahkan Coba Lagi dan Tetap Semangat!!! ('ternary operator')"; //contoh penggunaan ternary operator.
    document.writeln(`<p>${ucapan}</p>`);