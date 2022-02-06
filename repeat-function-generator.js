// Function Generator Pada JavaScript.

// Function generator adalah function yang digunakan untuk membuat data generator.
// Generator adalah data yang bisa di iterasi seperti Array.
// Untuk membuat function generator, kita perlu menggunakan tanda * (bintang) setelah kata function.
// Dan untuk mengembalikkan data di tiap iterasi, kita bisa gunakan kata kunci "yield" diikuti datanya. (Kata kunci 'yield' memiliki peran yang hampir sama seperti 'return')

// Contoh penggunaan function generator.
function* createNames(){            // function generator.
    yield "Kadek";
    yield "Frama";
    yield "Danamastyana";
}

const names = createNames();

console.info(names[0]);             // UNDEFINED. Data generator hanya bisa di iterasi, tidak bisa diakses berupa index atau bahkan diubah data nya itu tidak bisa.

for (const name of names) {         // menggunakan for of untuk melakukan iterasi data generator.
    console.log(name);
}


// Contoh penerapan function generator yang cukup kompleks.
function* buatGanjil(value){            // contoh penerapan function generator untuk mencari angka ganjil.
    for(let i = 1; i <= value; i++){
        if(i % 2 === 1){
            yield i;                    // Menggunakan yield untuk mengambalikkan data iterasi nya.
        }
    }
}

console.info(``);
const angkaGanjil = buatGanjil(36);

for (const angka of angkaGanjil) {      // Menggunakan for of untuk melakukan iterasi terhadap function buatGanjil();
    console.info(`Angka Ganjil: ${angka}`);
}


console.info(angkaGanjil.next().value);     // fungsi next() dapat digunakan untuk mengambil data tertentu dari function generator. Jadi semakin banyak dilakukan (angkaGanjil.next().value), maka jumlah data iterasi akan ditampilkan sesuai dengan banyaknya jumlah function next() disebutkan.



// NB: Funtion generator digunakan untuk membuat data yang bersifat generator atau dapat di iterasi. Namun pada function generator ini tidak dapat mengakses data berdasarkan index atau mengubah data nya berdasarkan index.
// Harus Tetap Semangat Dalam Berlatih !!! , Kembali menjadi lebih Kuat !!!, Semangat...!!!!!