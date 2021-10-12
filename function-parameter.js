// Kita bisa mengirim informasi ke function yang ingin kita panggil.
// untuk melakukan hal tersebut, kita perlu menambahkan parameter atau argument di function yang sudah kita buat.
// parameter ditempatkan di dalam kurung () di deklarasi method.
// parameter bisa lebih dari satu, jika lebih dari satu, harus dipisah menggunakan tanda koma.

//Contoh penggunaan function dengan parameter.
//membuat function
function sayHello(firstName, lastName){
    document.writeln(`<p>Hello ${firstName} ${lastName}</p>`);
}

// memanggil function.
sayHello("Kadek ", "Frama");
sayHello("Putu ", "Gede");