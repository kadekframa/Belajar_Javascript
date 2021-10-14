// Function dalam function (nested function).
// Tidak ada batasan dimana kita bisa membuat function.
// Termasuk jika kita ingin membuat function di dalm sebuah function, kita bisa melakukannya.
// Function yang terdapat di dalam, kita sebut inner function.
// Inner function hanya bisa diakses di tempat kita membuat function nya, tidak bisa diakses dari luar function nya.

// Contoh penggunaan function di dalam function.
function outer(){
    function inner(){
        document.writeln("Inner");
    }

    // memanggil function inner().
    inner();
    document.writeln('<br>');
    inner();
};

// memanggil function outer().
outer();
inner(); // error can not access inner function.


// NB: Sebagai catatan bahwa untuk memanggil function yang berada di dalam function itu harus dipanggil dari dalam function tempat menyimpan functionnya.
// Dalam hal ini sebagai contoh function inner() hanya dapat dipanggil dari dalam function outer(), karena function inner() itu berada di dalam function outer().
// Tetap Semangat Belajar JavaScript !!! Pasti Bisa!!!