// pada switch statement, kita sudah mengenal kata kunci break, yaitu untuk menghentikan case dalam switch.
// sama dengan pada perulangan, break juga digunakan untuk menghentikan seluruh perulangan.

// contoh penggunaan break pada perulangan
let counter = 1;
while(true){
    document.writeln(`<p>Perulangan Ke ${counter}</p>`);
    counter++;

    if(counter > 100){
        break;
    }
}