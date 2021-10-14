// Anonymous Function.


// contoh penggunaan anonymous function di variable.
let say = function(name){
    document.writeln(`<p>Hello ${name}</p>`);
};

say("Kadek Frama");


// contoh penggunaan anonymous function di parameter.
//membuat function
function giveMeName(callback){
    callback("Kadek");
};


giveMeName(say);                                // memanggil function anonymous dengan menyimpan variabel yang sudah berisi functiona anonymous.
giveMeName(function(name){                      // memanggil function anonymous dengan menyimpan functionnya secara langsung.
    document.writeln(`<p>Hello ${name}</p>`);
});