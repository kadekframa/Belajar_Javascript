// Nullish Coalescing Operator pada JavaScript.

// nullish value adalah null dan undefined.
// Nullist coalescing operator (??) adalah operator mirip dengan ternary operator, yang membedakan adalah pada kondisi, jika bernilai null atau undefined, baru value default nya diambil.


let parameter;  // undefined

let data = parameter;
if(data === undefined || data == null){         // If statement biasa.
    data = "Nilai Default";
}else{
    data = "Nilai Not Default";
}

document.writeln(`<p>${data}</p>`);


let tipenya = typeof parameter;                 // typeof untuk mengetahui tipe data dari variable tertentu.
let data_nullist_coalescing_operator = parameter ?? "Nilai Default Menggunakan operator Nullist Coalescing Operator.";      // contoh penggunaan nullist coalescing operator!.

document.writeln(`<p>${tipenya}</p>`);                          // menampilkan ke window browser.
document.writeln(`<p>${data_nullist_coalescing_operator}</p>`); // menampilkan ke window browser.