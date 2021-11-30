
// Destructuring pada Javascript.
// Destructuring adalah fitur yang bisa digunakan untuk membongkar value-value di array atau object ke dalam sebuah variable-variable baru.
// Fitur ini sangat mempermudah kita ketika ingin mengambil data dari array atau object tanpa harus melakukan pengambilan data satu persatu.


// Contoh mengambil data di array tanpa destructuring.
const names = ["Kadek", "Frama", "Danamastyana"];
const firstName = names[0];         // mengambil data pada sebuah object dengan menggunakan cara biasa.
const middleName = names[1];
const lastName = names[2];

console.info(firstName);
console.info(middleName);
console.info(lastName);
console.info("");

// Contoh mengambil data di array dengan menerapkan destructuring (destructuring array).
const namaNya = ["Budi", "Doremi", "Prakarsa", "Budi", "Tetap semangat"];
const [namaAwal, namaTengah, namaAkhir, ...others] = namaNya;               // penerapan destructuring pada kasus mengambil data di sebuah array.

console.info(namaAwal);
console.info(namaTengah);
console.info(namaAkhir);
console.info(others);



// Contoh cara mengambil data di object dengan cara biasa.
const person = {
    firstName: "Kadek",
    lastName: "Frama",
    address: {
        street: "Jalan Tetap Semangat",
        city: "Bali",
        country: "Indonesia"
    },
    hobby: "Bermain layang-layang",
    channel: "Programmer Tetap Semangat"
};
const namaPertama = person.firstName;       // mengambil data pada sebuah object dengan cara biasas.
const namaAkhiran = person.lastName;

console.info("");
console.info(namaPertama);
console.info(namaAkhiran);

// Contoh cara mengambil data di object dengan menerapkan destructuring (destructuring object).
const personDestructuring = {
    namaAnakKeberapa: "Budi",
    namaPanggilan: "Doremi",
    address: {
        street: "Jalan Mencari Kebenaran Hidup",
        city: "Badung",
        country: "Indonesia"
    },
    hobby: "Berlatih programming",
    channel: "Programmer Pantang Menyerah"
};

const {namaAnakKeberapa, namaPanggilan, address, ...lainnya} = personDestructuring;     // penerapan destructuring dalam mengambil data pada sebuah object.

console.info("");
console.info(namaAnakKeberapa);
console.info(namaPanggilan);
console.info(address);
console.info(lainnya);