// Closure di JavaScript.
// Closure adalah kombinasi function dan bundel referensi ke data disekitarnya.
// Kita sudah tahu bahwa local scope tidak bisa diakses di luar scopenya.
// Dengan kemampuan closurem kita bisa membuat sebuah function di local scope dan referensi ke data di sekitar local scope tersebut, keluar scope nya.

// Contoh penggunaan closure di JavaScript.

function createAdder(value){
    const owner = "Kadek Frama";
    function add(param){
        document.writeln(`Selamat ${owner}, Anda memperoleh nilai sebesar: <p></p>`);
        return value + param;
    }
    return add;
}

const addValueNumber = createAdder(34);         // Membuat function seperti ini sama dengan menulis kode function seperti dibawahnya (komentar).
// function addValueNumber(param){
//     document.writeln(`Selamat ${owner}, Anda memperoleh nilai sebesar: <p></p>`);
//     return 34 + param;
// }

document.writeln(addValueNumber(12));           // menampilkan function addValueNumber() yang berisikan value parameter yaitu 12 ke jendela layar.
