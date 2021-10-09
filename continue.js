// Continue digunakan untuk menghentikan perulangan. Hampir sama seperti break.
// Namun ada perbedaan dengan break. continue digunakan untuk menghentikan perulangan saat ini, lalu melanjutkan ke perulangan selanjutnya.

// contoh penggunaan continue
for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        continue;
    }
    document.writeln(`<p>Perulangann ganjil yaitu: ${i}</p>`);
};