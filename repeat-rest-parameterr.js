// Function Rest Parameter pada JavaScript.

// Rest parameter adalah fitur dimana kita bisa mengirim data sebanyak-banyaknya pada satu parameter, dan secara otomatis akan di konversi menjadi array.
// Untuk membuat rest parameter, ada ketentuannya.
// Rest parameter hanya boleh ada satu di function, tidak boleh lebih dari satu.
// Rest parameter hanya boleh berada di posisi paling akhir, tidak boleh di depan atau di tengah kecuali memang cuma ada 1 parameter.
// Di bahasa pemrograman lain, ada juga yang bilang ini adalah variable argument.


function sum(name, ...data){        // contoh penerapan rest parameter di javascript.
    let total = 0;
    for (const item of data) {
        total += item;
    }
    document.writeln(`<p>Total dari ${name} adalah: <b>${total}</b></p>`);
}


sum('Papaya', 1,2,3,4,5,6,7,8,9,10);        // memanggil function dengan rest parameter.

sum('Watermelon', 4,5,6,7,8,9,10);          // memanggil function dengan rest parameter.

sum('Cocomelon', ...[4,5,6,7,8,9,10]);      // memanggil function dengan rest parameter berupa array.






// NB: Harus Tetap Semangat Dalam Berlatih!!!, Kembali Menjadi Lebih Kuat !!!, Semangat!!!