// Arrow function di JavaScript.
// Sebelumnya kita sudah bahas tentang arrow function.
// Arrow function juga bisa kita gunakan di sebagai object method.
// Namun perlu diketahui, arrow function tidak bisa digunakan untuk mengakses arguments object, function generator, kata kunci this dan kata kunci super (dibahas di materi JavaScript Object Oriented Programming).
// Jadi pastikan gunakan arrow function hanya memang ketika kita tidak butuh fitur-fitur diatas.

// Contoh penggunaan arrow function di object.
const person = {
    name: "Kadek",
    sayHello: (nama) => {
        console.info(`Hello ${nama}`);      // arrow function bisa diterapkan di object method, namun arrow function pada object method tidak dapat mengakses kata kunci "this".
    }
};

person.sayHello("Kadek Frama");             // memanggil object method sayHello() yang berisikan value parameter. Dalam hal ini object method sayHello() itu berisikan arrow function yang diterapkan pada object atau disebut object method.


// Tetap Semangat Berlatih JavaScript!, Pantang Menyerah demi meraih impian! :)