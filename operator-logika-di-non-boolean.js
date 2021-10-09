// Operator logika di non boolean pada Javascript. Operator logika AND (&&) dan OR (||) digunakan untuk dua data boolean.
// Namun di JavaScript, kita bisa menggunakan operator logika AND dan OR untuk tipe data non boolean.

// Operator OR (||) di non boolean ini akan mengambil nilai pertama yang truthy.
// Jika tidak ada satupun yang bernilai truthy, maka yang terakhir yang akan diambil.
console.info("Hello" || "");            // Hello
console.info("" || []);                 // []
console.info("0" || "NOL");             // 0
console.info(0 || "NOL");               // NOl
console.info(null || "NULL");           // Null
console.info(undefined || "UNDEFINED"); // UNDEFINED
console.info(0 || false);               // false, karena tidak ada yang bernilai truthy maka nilai akhir yang diambil.

// contoh penggunaan logika OR (||) di non boolean.
const person = {
    firstName: "",
    lastName: "Frama"
};

const names = person.firstName || person.lastName;
document.writeln(`<p>${names}</p>`);    // Hasil yang ditampilkan dari variable names yaitu "Frama", karena firstName bernilai falsy, sedangkan lastName bernilai truthy.


// Operator AND (&&) di non boolean ini akan mengambil nilai pertama yang falsy.
// Jika tidak ada satupun yang bernilai falsy, maka yang terakhir yang akan diambil.
console.info("Hello" && "");            // ""
console.info("" && []);                 // ""
console.info("0" && "NOL");             // "NOL"
console.info(0 && "NOL");               // 0
console.info(null && "NULL");           // null
console.info(undefined && "UNDEFINED"); // undefined
console.info("0" && true);               // true, karena tidak ada yang bernilai falsy maka nilai akhir yang diambil.

// contoh penggunaan logika AND (&&) di non boolean.
const orang = {
    firstName: "Kadek",
    middleName: "",
    lastName: "Frama"
};

const nama = orang.firstName && orang.middleName && orang.lastName;
document.writeln(`<p>${nama}</p>`);     // Hasil yang ditampilkan dari variable nama yaitu "", karena logika AND (&&) mengambil data yang bernilai falsy, maka yang akan ditampilkan adalah data dari middleName.

if(nama == false){
    document.writeln(`""  Ini Tampilan False dari Logika AND (&&) Yaa`)
}else{
    document.writeln("Tetap Semangat!!!");
}

