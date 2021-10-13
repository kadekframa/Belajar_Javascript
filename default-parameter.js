// Default Parameter.
// Sekarang kita sudah tahu bahwa parameter itu optional, artinya kita bisa tidak memberi value terhadap parameter.
// Parameter juga bisa kita beri default value, artinya ketika kita tidak mengirim data ke parameter atau kita mengirim data undefined, maka secara otomatis parameter akan diisi dengan default value.

// contoh penggunaan default parameter.

function register(name, gender = "Unknown"){    // apabila parameter diisi pada saat memanggil function, maka nilai nya akan sesuai dengan parameter yang diisi, namun jika tidak diisi maka default parameter yang akan ditampilkan.
    document.writeln(name);
    document.writeln(gender);

};

register();
document.writeln("<p></p>");
register("Kadek");
document.writeln("<p></p>");
register("Kadek", "Frama");
document.writeln("<p></p>");