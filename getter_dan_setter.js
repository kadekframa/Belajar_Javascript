
// Penggunaan Getter dan Setter di Javascript.
// Getter dan Setter adlaah kemampuan membuat function yang berbeda untuk mengambil data (Getter) dan mengubah data (Setter) oada sebuah property di Object.
// Dengan menggunakan getter dan setter, kita bisa melakukan hal apapun dalam function sebelum sebuah property di akses atau diubah, misal menambah validasi dan lain-lain.

const person = {
    firstName: "Kadek",
    lastName: "Frama",
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value){
        const array = value.split(" ");
        this.firstName = array[0];
        this.lastName = array[1];
    }
};


console.info(person.fullName);  // memanggil getter fullName;

person.fullName = "Budi Utomo"; // mengakses setter fullName, dengan tujuan untuk mengubah value dari property fullName menjadi "Budi Utomo";
console.table(person);          // mengakses object person dengan menggunaknan console table.


