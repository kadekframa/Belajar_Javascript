// Function generator adalah function yang digunakan untk membuat data generator.
// Generator adalah data yang bisa di integrasi seperti Array.
// Untuk membuat function generator, kita perlu menggunakan tanda * (bintang) setelah kata function.
// dan untuk mengembalikan data di tiap iterasi, kita bisa gunakan kata kunci yield diikuti datanya.

// Contoh penggunaan function generator.
function* createNames(){
    yield "Kadek";
    yield "Frama";
    yield "Danamastyana";

};

const names = createNames();
for (const name of names) {
    console.info(name);
    document.writeln(name);
}

