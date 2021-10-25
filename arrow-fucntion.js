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
const sayHello = (name) => {
    const say = `Hello ${name}`;
    console.info(say);
}

sayHello("Kadek Frama");


// 