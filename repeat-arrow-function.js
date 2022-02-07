// Arrow Function in JavaScript.

// Arrow function adalah alternatif pembuatan function yang lebih sederhana dari function biasanya.
// Namun terdapat limitasi dan juga tidak bisa digunakan di semua situasi.
// Dinamakan arrow function karena menggunakan tanda => (seperti panah).
// Berikut contoh beberapa kekurangan arrow function:
/*
    - tidak memiliki fitur arguments object.
    - tidak bisa menggunakan function generator.
    - tidak bisa mengakses this (yang nanti akan dibahas di function di object).
    - tidak bisa mengakses super (akan dibahas di JavaScript object oriented programming).
*/

// Contoh penggunaan arrow function.
const sayHello = (name) =>{             // contoh penerapan arrow function. Arrow function tidak dapat berdiri sendiri, harus disimpan pada variable atau dimasukkan menjadi parameter.
    const say = `Hello ${name}`;
    document.writeln(say);
}

sayHello(`Kadek Frama Danamastyana, Tetap Semangat !!!`);



// Jika sebuah arrow function isinya sederhana, misal hanya satu baris.
// Kita dapat membuat arrow function tanpa harus menggunakan block.
const sayHelloSemangat = (nama) => document.writeln(`<p>Hello ${nama}, ini adalah contoh arrow function satu baris. Tetap Semangat Berlatih JavaScript !!!</p>`);

sayHelloSemangat("Kadek Frama");



// Arrow function return value.
// Arrow function bisa mengembalikkan value, sama seperti function biasanya.
// Jika menggunakan block, maka kita perlu menggunakan kata kunci return.
// Jika tidak menggunakan block, kita tidak perlu menggunakan kata kunci return.

const sum = (first, second) => first + second;
document.writeln(`<p>Hasil penjumlahan nya adalah: <b>${sum(10, 20)}</b></p>`);


// Arrow function tanpa kurung parameter.
// Jika parameter di arrow function hanya satu, kita bisa tidak menggunakan kurung pada parameter.
const sayHalloYa = namanya => document.writeln(`Hallo ${namanya}, Harus tetap semangat !!!`);       // jika parameter nya hanya satu, tanda kurung untuk parameter nya dapat tidak diisi.
sayHalloYa("Kadek Frama D.");       // memanggil arrow function sayHalloYa() dengan parameter string.



// Arrow function sebagai parameter.
// Karena arrow function sama seperti anonymous function, jadi kita juga bisa menggunakan arrow function sebagai parameter di function lain.

function giveMeNama(callback){
    callback("Kadek Frama");
}

giveMeNama((nama_nya) => {document.writeln(`<p>Hallo ${nama_nya}, Ini adalah contoh penerapan arrow function sebagai parameter di function lain. Tetap Semangat Berlatih !!!</p>`)});




// NB: Sifat dari Arrow Function hampir sama persis seperti Anonymous function yaitu tidak dapat berdiri sendiri, harus disimpan ke dalam variable atau dimasukkan sebagai parameter.
// Harus Tetap Semangat Berlatih JavaScript !!!, Kembali Menjadi Lebih Kuat...!!!