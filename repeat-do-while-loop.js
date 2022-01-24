// Do While Loop pada JavaScript.

// do while loop adalah perulangan yang mirip dengan while.
// perbedaannya hanya pada pengecekan kondisinya.
// pengecekan kondisi di while loop dilakukan di awal sebelum perulangan dilakukan, sedangkan di do while loop dilakukan setelah perulangan dilakukan.
// oleh karena itu dalam do while loop, minimal pasti sekali perulangan dilakukan walaupun kondisi tidak bernilai true.



let counter = 1;

do{
    document.writeln(`<p>Perulangan ke ${counter}</p>`);
    counter++;
}
while(counter <= 0);



// NB: pada perulangan do while loop, perulangan akan dilakukan minimal 1 kali walaupun kondisinya bernilai false sekalipun.
// Harus Tetap Semangat Berlatih !!!, Kembali menjadi lebih Kuat!!!