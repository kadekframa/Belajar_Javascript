// Optional Chainning pada JavaScript.

// Optional chainning operator (?) merupakan operator yang digunakan untuk mengamankan ketika kita ingin mengakses property sebuah object dari data nullish.
// Jika kita mencoba mengakses property dari sebuah object dari data nullish tanpa menggunakan optional chainning operator, maka akan terjadi error.



const person = {
    
};

const country = person?.address?.country;


// let say;
// if(person.address !== undefined && person.address !== null){        // cara manual untuk mengamankan ketika kita ingin mengakses property sebuah object dari data undefined dan nullish.
//     say = person.address.country;
// }

// alert(`Negara: ${say}`);


// alert(`Ini adalah contoh penerapan optional chainning: ${person?.address?.country}`);    // contoh penerapan optional chainning untuk mengamankan ketika kita ingin mengakses property sebuah object dari data undefined dan nullish.

document.writeln(`<p> ${country} </p>`);
document.writeln(`<p> SUKSES`);




// NB: dengan menggunakan optional chainning ini, kode akan terlihat lebih simple dan mudah digunakan.