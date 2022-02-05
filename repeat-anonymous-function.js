// Anonymous Function pada JavaScript.

// Sebelumnya kita selalu membuat function dengan nama.
// Kita juga bisa membuat function tanpa nama atau istilahnya adalah anonymous function.
// Kita bisa membuat anonymous function dalam sebuah variable atau bisa juga kita buat ketika mengisi parameter.

// Contoh penggunaan anonymous function.

let say = function (name){                                  // Contoh penerapan anonymous function ke dalam variable.
    document.writeln(`Hallo, ${name} Tetap Semangat !`);
}

say(`Kadek Frama Danamastyana`);                            // memanggil variable say() yang berisi value berupa anonymous function.


function giveMeNamenya(callbackAgain){                      // Contoh penerapan anonymous function ke dalam parameter.
    callbackAgain(`Kadek Frama`);
}

giveMeNamenya(function (namenya){                           // memanggil function giveMeNamenya() yang berisi parameter beruapa anonymous function.
    document.writeln(`<p>Hello ${namenya}</p>`);
});





// NB: Anonymous function tidak bisa berdiri sendiri, harus disimpan di dalam variable atau dimasukkan sebagai parameter.
// Tetap Semangat !!!, Kembali menjadi lebih Kuat!!!, Semangat !!!