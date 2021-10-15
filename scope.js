// Scope merupakan area akses sebuah data.
// Ada dua jenis scope, global scope dan local scope.
// Setiap kita membuat function, maka kita akan membuat local scope untuk function tersebut.
// Data di global scope bisa diakses dari local scope, namun data di local scope hanya bisa di akses di local scope tersebut atau di scope local dibawahnya (dalam kasus function dalam fucntion).

// Contoh penggunaan scope.

// global scope.
let counter = 0;

function hitMe(){
    //local scope hitMe.
    counter++;
    document.writeln(counter);
};

function other(){
    //local scope other.
};



hitMe();
hitMe();
hitMe();

document.writeln(`<p>${counter}</p>`);
document.writeln(counter);



// NB: Variabel pada global scope dapat diakses darimanapun, tetapi variabel yang dideklarasikan pada local scope hanya dapat diakses pada local scope tersebut.
// Variabel dari local scope tertentu tidak dapat diakses di local scope lain.