// with statement merupakan fitur yang digunakan untuk menurunkan sebuah scope data.
// Dengan menggunakan with statement, kita bisa mengakses property dalam sebuah data tanpa harus menyebut datanya.

// contoh penggunaan with statement
const person = {
    firstName: "Kadek",
    middleName: "Frama",
    lastName: "Danamastyana"
};

// console dari object person.
console.info(person.firstName);
console.info(person.middleName);
console.info(person.lastName);

// contoh penggunaan with statement yang hasil outputnya sama seperti console pada umunya.
// dalam hal ini with statement hanya mempermudah penulisan code object person, yaitu hanya perlu disebutkan sekali saja.
with (person){
    console.info(firstName);
    console.info(middleName);
    console.info(lastName);
}


// NB: Sebenarnya with statement ini sudah tidak direkomendasikan untuk dipergunakan oleh programmer, karena memungkinkan terjadinya code yang ambigu.