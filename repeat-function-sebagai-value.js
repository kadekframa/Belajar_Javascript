// Function sebagai value pada JavaScript.

// Function tidak hanya bisa digunakan sebagai kode program yang dieksekusi, tapi bisa juga sebagai value.
// Artinya, function bisa disimpan di variable, bisa juga dikirim melalui parameter ke function lainnya.



function sayHello(name){
    document.writeln(`<p>Hello ${name}</p>`);
}

// Contoh penggunaan function sebagai value.
let say = sayHello;                 // memasukkan function sayHello() ke dalam variable say (function sebagai value).


sayHello(`Kadek Frama`);            // memanggil function sayHello() dapat menggunakan cara seperti ini atau,
say("Kadek Frama Danamastyana");    // atau juga dapat dilakukan dengan menggunakan cara seperti ini. Karena function sayHello sebelumnya juga sudah dimasukkan kedalam variable say.


// Function sebagai parameter.
function giveMeName(callback){
    callback(`Kadek Frama Callback`);
}

giveMeName(sayHello);               // memanggil function giveMeName() dengan paraemter function sayHello().
giveMeName(say);                    // memanggil function giveMeName() dengan parameter variabel berisi value function sayHello().


// NB: Jadi Function di JavaScript bisa dijadikan sebagai value (dimasukkan ke variable) dan bisa juga dikirim untuk menjadi parameter pada function lain. Tetap Semangat Berlatih !!!, Kembali menjadi lebih kuat !!!, Semangat!!!