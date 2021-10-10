// for in merupakan perulangan for yang digunakan untuk mengiterasi seluruh data property di object atau index di array.
// lebih direkomendasikan untuk melakukan iterasi pada object.

// contoh penggunaan for in:
//contoh 1, penggunaan for in pada object.
const person = {
    firstName   : "kadek",
    middleName  : "frama",
    lastName    : "danamastyana"
};

for(const property in person){
    document.writeln(`<p>${property} : ${person[property]} </p>`);
};

document.writeln(`</br>`);


//contoh 2, penggunaan for in pada array.
const nama = ["Putu", "Made", "Komang"];
for(const index in nama){
    document.writeln(`<p>${index} : ${nama[index]}</p>`);
};