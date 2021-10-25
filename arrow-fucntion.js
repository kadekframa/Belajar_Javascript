// Arrow Function adalah alternatif pembuatan function yang lebih sederhana dari function biasanya.
// Namun terdapat limitasi dan juga tidak bisa digunakan di semua situasi.
// Dinamakan Arrow function karena menggunakan tanda "=>" (seperti anak panah).
// Berikut contoh beberapa kekurangan arrow function:
/*  - tidak memiliki fitur arguments object.
    - tidak bisa menggunakan function generator.
    - tidak bisa mengakses this (yag nanti akan dibahas di function di obejct).
    - tidak bisa mengakses super (yang nant akan dibahas di JavaScript OOP).
*/

// contoh sederhana penggunaan arrow function.
// Arrow Function sebagai variable.

const sayHello = (name) => {                    // membuat arrow function. Arrow function tidak dapat berdiri sendiri, maka dari itu harus disimpan di dalam variable atau parameter.
    const say = `Hello ${name}`;
    console.info(say);
}

sayHello("Kadek Frama");                        // memanggil arrow function yang berisikan value parameter.


// Contoh arrow function satu line. Jika kode yang ada di dalam block arrow function hanya satu line saja, itu dapat dibuat sebagai berikut.
const sayCongrats = (ucapan) => document.writeln(`Hallo Kadek Frama ${ucapan}`); // Contoh kode penggunaan arrow function sederhana dengan satu line saja.
sayCongrats("Selamat dan Tetap Semangat...!!!");        // memanggil arrow function yang berisikan value parameter.


// Contoh arrow function. Arrow function juga dapat mengembalikan value atau return value
const sum = (first, second) => first + second;                      // Contoh arrow function tanpa block (jika kode di dalam block hanya satu line saja).

// arrow function dapat dibuat seperti diatas atau seperti dibawah

// const sum = (firt, second) => {                                  // Contoh arrow function dengan block.
//     return firt + second;
// };

sumPlus = sum(2, 3);                                                // Menyimpan sekaligus memanggil arrow function ke dalam variable sumPlus.
document.writeln("<p><br></p>");
document.writeln(`Total Penjumlahannya Adalah : <b> ${sumPlus}</b>`);   // Menampilkan value dari arrow function.



//  Arrow function sebagai parameter.
function giveMeName(callback){
    callback("Kadek Frama");        // mengisi value dari parameter di arrow function.
};

document.writeln("<p><br></p>");
giveMeName((nama) => document.writeln(`Hallo ${nama}, ini adalah contoh penggunaan arrow function sebagai parameter yaa..`));     // penggunaan arrow function sebagai parameter.





// Kesimpulan: Arrow Function itu mirip seperti anonymous function, karena sama-sama tidak dapat berdiri sendiri. Arrow function harus disimpan sebagai variable atau sebagai parameter seperti pada contoh diatas.
// Tetap Semangat berlatih JavaScript..!!! 