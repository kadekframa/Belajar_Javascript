
// Destructuring pada Javascript.
// Destructuring adalah fitur yang bisa digunakan untuk membongkar value-value di array atau object ke dalam sebuah variable-variable baru.
// Fitur ini sangat mempermudah kita ketika ingin mengambil data dari array atau object tanpa harus melakukan pengambilan data satu persatu.

// Contoh mengambil data di array tanpa destructuring.
const names = ["Kadek", "Frama", "Danamastyana"];
const firstName = names[0];
const middleName = names[1];
const lastName = names[2];

console.info(firstName);
console.info(middleName);
console.info(lastName);
console.info("");



// Contoh mengambil data di array dengan menerapkan destructuring (destructuring array).
const namaNya = ["Budi", "Doremi", "Prakarsa", "Budi", "Tetap semangat"];
const [namaAwal, namaTengah, namaAkhir, ...others] = namaNya;

console.info(namaAwal);
console.info(namaTengah);
console.info(namaAkhir);
console.info(others);