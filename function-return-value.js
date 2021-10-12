// secara default function itu tidak menghasilkan value apapun, namun jika kita ingin, kita bisa membuat sebuah function mengembalikan value.
// agar function bisa menghasilkan value, kita bisa menggunakan kata kunci return di dalam function nya.
// Dan di dalam block function, untuk nilai tersebut, kita harus menggunakan kata kunci return, lalu diikuti dengan data yang ingin kita hasilkan.
// Function hanya bisa mengembalikan satu data, jika kita ingin mengembalikan beberapa data sekaligus, kita bisa menggunakan Array sebagai return value nya.

// contoh penggunaan function return value.
// membuat function dengan parameter dan return value.
function sayHello(firstName, lastName){
    const say = `Hello ${firstName} ${lastName}`;
    return say;
};

// memanggil function dan menangkap return value nya.
const result = sayHello("Kadek Frama", "Danamastyana");
document.writeln(`<p>${result}</p>`);