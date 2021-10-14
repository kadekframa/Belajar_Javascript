// Rest parameter adalah fitur dimana kita bisa mengirim data sebanyak-banyak nya pada satu parameter, dan secara otomatis akan di konversi menjadi Array.
// Untuk membuat rest parameter, ada ketentuannya.

// Rest parameter hanya boleh ada satu di function, tidak boleh lebih dari satu.
// Rest parameter hanya boleh berada di posisi paling akhir, tidak boleh di depan atau di tengan, kecuali memang cuma ada 1 parameter.
// Di bahasa pemrograman lain, ada jug yang bilang ini adalah variable argument.

// contoh penggunaan function rest parameter.
//membuat function dengan rest parameter
function sum(name, ...data){
    let total = 0;
    for (const item of data) {
        total += item;
    }
    document.writeln(`Total ${name} is ${total}`);
};

//memanggil function dengan rest parameter.
sum("Tetap Semangat", ...[12,13,14,15,16,17,18,19]); // tambahkan spread syntax "..." (titik tiga kali) diikuti dengan array nya ketika memanggil function.

document.writeln("<br>");
document.writeln("<br>");

sum("Mango", 1,2,3,4,5,6,7,8);

document.writeln("<br>");
document.writeln("<br>");

let valuenya = [1,2,3,4,5,10,12,24,34,54,64,56,74.76,84,90,94,100];
sum('watermelon', ...valuenya );                    // apabila sudah memiliki variable array, maka saat memanggil function nya itu dapat menambahkan spread syntax "..." (titik tiga kali) lalu diikuti dengan variable arraynya.
