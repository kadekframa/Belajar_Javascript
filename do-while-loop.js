// do while loop adalah perulangan yang mirip dengan while.
// perbedaannya hanya pada pengecekan kondisi.
// pengecekan kondisi di while loop dilakukan di awal sebelum perulangan dilakukan, sedangkan di do while loop dilakukan setelah perulangan dilakukan.
// Oleh karena itu dalam do while loop, minimal pasti sekali perulangan dilakukan walaupun kondisi tidak bernilai true.

// contoh penggunaan do while loop
let counter = 4;
do{
    document.writeln(`<p>perulangan do while ke: ${counter}</p>`);
    counter++;
}while(counter < 6);