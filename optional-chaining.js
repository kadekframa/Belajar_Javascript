// optional chaining "?" merupakan operator yang digunakan untuk mengamankan ketika kita ingin mengakses property sebuah object dari data nullish.
// optional chaining mirip seperti nullish coalescing operator namun cara penggunaan nya berbeda.

// contoh 1
const person = {
    address: {
        country: "Indonesia"
    }
};

let country;
if(person.address !== undefined && person.country !== null){
    country = person.address.country;
}

document.writeln(`<p>${country} ('dengan if statement') </p>`);


country = person?.address?.country;       // Contoh penggunaan optional chaining. Jadi tanda "?" pertama itu mengecek apakah object person bernilai nullish atau tidak, jika tidak nullish maka akan lanjut mengecek property addres apakah nullish atau tidak, jika tidak nullish maka akan mengakses property country. Jika terdapat nullish maka variable country akan diganti menjadi undefined.

document.writeln(`<p>${country} ('dengan optional chaining') </p>`);