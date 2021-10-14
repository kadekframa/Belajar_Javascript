// Function sebagai value.
// Function tidak hanya bisa digunakan sebagai kode program yang dieksekusi, tapi bisa juga sebagai value.
// Artinya, function bisa disimpan di variable, bisa juga dikirim melalui parameter ke function lainnya.

// contoh penggunaan function di variable.
function sayHello(name){
    document.writeln(`<p>Hello ${name}</p>`);
}

sayHello("Kadek");          // memanggil function dengan parameter.

let say = sayHello;         // memanggil memasukkan function ke dalam variable "say".
say("Frama");               // memanggil function dengan menggunakan variable yang sudah berisi functionnya.




// Function juga dapat dikirim melalui parameter.
// contoh penggunaan function di parameter.

function giveMeName(callback){
    callback(`Tetap Semangat Belajar JavaScript!`); //sayHello("Tetap Semangat Belajar JavaScript!");
};

giveMeName(sayHello);       // memanggil function melalui parameter ke function lain.
giveMeName(say);            // memanggil function malalui variiabel yang sudah berisi funtionnya untuk disimpan ke function lain.






// Jadi Kesimpulannya function di javascript dapat disimpan ke dalam sebuah variabel, juga dapat disimpan ke dalam fucntion lain melalui parameter.
// Harus Tetap Semangat Belajar JavaScript!!!