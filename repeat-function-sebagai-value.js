// Function sebagai value pada JavaScript.

// Function tidak hanya bisa digunakan sebagai kode program yang dieksekusi, tapi bisa juga sebagai value.
// Artinya, function bisa disimpan di variable, bisa juga dikirim melalui parameter ke function lainnya.



function sayHello(name){
    document.writeln(`<p>Hello ${name}</p>`);
}

let say = sayHello;                 // memasukkan function sayHello() ke dalam variable say (function sebagai value).


sayHello(`Kadek Frama`);            // memanggil function sayHello() dapat menggunakan cara seperti ini atau,
say("Kadek Frama Danamastyana");    // atau juga dapat dilakukan dengan menggunakan cara seperti ini. Karena function sayHello sebelumnya juga sudah dimasukkan kedalam variable say.



// NB: Tetap Semangat Berlatih !!!, Kembali menjadi lebih kuat !!!, Semangat!!!