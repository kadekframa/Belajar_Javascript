// For of pada JavaScript.

// Jika for in digunakan untuk melakukan iterasi property atau index, berbeda dengan for of. For of digunakan untuk melakukan iterasi terhadap isi value dari iterable object, seperti array, string dan lain-lain.
// For of tidak bisa digunakan untuk melakukan iterasi data di object, karena object bukanlah iterable.

const names = ["Kadek", "Frama", "Danamastyana"];

for (const name of names) {                     // contoh penerapan for of untuk data array.
    document.writeln(`<p>${name}</p>`);
}


const myFullName = "Kadek Frama Danamastyana";

for (const character of myFullName) {           // contoh penerapan for of untuk data string.
    document.writeln(`<p>${character}</p>`);
}


// NB: perulangan "for of" hanya dapat digunakan untuk tipe data iterable seperti array atau string (tipe data object tidak termasuk tipe data iterable).