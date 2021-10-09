// Continue digunakan untuk menghentikan perulangan. Hampir sama seperti break.
// Namun ada perbedaan dengan break. continue digunakan untuk menghentikan perulangan saat ini, lalu melanjutkan ke perulangan selanjutnya.

// contoh penggunaan continue
for(let i = 1; i <= 36; i++){
    if(i % 2 === 0){
        continue;
    }
    document.writeln(`<p>Perulangan bilangan ganjil yaitu: ${i}</p>`);  // Hasil yang ditampilkan pada browser adalah perulangan bilangan ganjil kurang dari 36. Karena pada if statement itu merujuk pada bilangan yang habis di bagi 2, dalam hal ini berarti adalah bilangan genap. Lalu continue akan berfungsi untuk menstop apabila perulangan i sama dengan bilangan genap, maka perulangan berikutnya yang dilanjutkan.
};