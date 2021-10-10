// for of digunakan untuk melakukan iterasi terhadap isi value dari iterable object, seperti array, string dan lain-lain.
// for of tidak bisa digunakan untuk melakukan iterasi data di object, karena object bukanlah iterable.

// Contoh penggunaan for of.
// contoh 1.
const names = ["Kadek", "Frama", "Danamastyana"];
for(const name of names){
    document.writeln(`<p>${name}<p>`);
};

document.writeln("<br>");

//contoh 2.
const myName = `Kadek Frama Danamastyana`;
for(const character of myName){
    document.writeln(`<p>${character}</p>`);
};