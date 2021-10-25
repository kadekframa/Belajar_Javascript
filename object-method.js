// Object Method di JavaScript.
// Pada tipe data object, kita sudah membahas tentang property di object.
// Karena sebenarnya function juga merupakan salah satu tipe data, jadi function pun sebenarnya bisa ditambahkan sebagai property di object.
// Cara pembuatannya pun sama dengan function sebagai value.
// Function di object kadang disebut juga sebagai Object Method.

// Contoh penggunaan object method.
const person = {
    nama: "Kadek",
    sayHello: function (nama){      // Contoh penggunaan object method (memasukkan function ke dalam property object).
        alert(`Hello ${nama}`);
    }
};

person.nama = "frama"               // Mengganti value dari property nama pada object person.
alert(` Hallo ${person.nama}`);

person.sayHello("Kadek Frama");      // memanggil property sayHello() atau object method pada object person yang berisikan value parameter anonymous function.



// Contoh penggunaan object method apabila objectnya sudah dibuat.
const objectBaru = {            // membuat objet baru.
    nama : "Kadek"
};

objectBaru.congratsUcapan = function (ucapan){
    document.writeln(`${ucapan} Kadek Frama Danamastyana, Pantang Menyerah! :)`);
};

objectBaru.congratsUcapan("Selamat dan tetap semangat ");           // memanggil object method congratsUcapan() yang berisikan parameter dari object objectBaru.


// Tetap semangat berlatih JavaScript. Pantang Menyerah...!!!