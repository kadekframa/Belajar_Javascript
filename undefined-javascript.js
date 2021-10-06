// undefined adalah tipe data yang berfungsi untuk memberitahu bahwa variable tertentu belum didefinisikan.
// Sebuah variable yang belum ditambahkan nilai, maka artinya variable tersebut merupakan tipe undefined.
// contoh 1
let data;                   //dalam hal ini variable data belum di definisikan atau tidak memiliki nilai, maka variable data merupakan tipe undefined.
if(data === undefined){
    alert("UNDEFINED");
}else{
    alert("DEFINED");
}

// contoh 2
let names;                  //dalam hal ini variable names juga belum di definisikan atau tidak memiliki nilai, maka variable names merupakan tipe undefined.
if(names === undefined){
    console.info("Variable 'names' UNDEFINED Yaa");
}else{
    console.info("DEFINED");
}

// contoh 3
const nama = ["Kadek", "Frama"];
if(nama[3] === undefined){                  // sebagai contoh disini mengakses index yang tidak ada nilainya "[3]" dari variable nama, maka akan menghasilkan "Array nya Undefined".
    console.info("Array nya Undefined");
}else{
    console.info("Array nya Define ya");
};