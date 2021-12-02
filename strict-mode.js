

// Strict Mode pada Javascript.
// Saat kita menjalankan kode program Javascript, secara default kode program kita berjalan dalam mode tidak strict, atau istilahnya sloppy mode.
// Pada ECMAScript 5, diperkenalkan mode strict, dimana ketika strict mode dijalankan, maka akan merubah beberapa cara kerja di Javacript, seperti:
/*
    - Merubah beberapa Javascript error dari yang tadinya silent error, menjadi throw error (terlihat).
    - Memperbaiki beberapa kesalahan engine Javascript untuk optimasi.
    - Monolak beberapa kode perintah yang kedepannya akan digunakan di ECMAScript.
*/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode

// Cara menyalakan Strict Mode.
// Untuk menyalakan strict mode, kita bisa menambahkan `use strict` pada baris awal file javascript kita.
// Atau bisa juga ditambahkan di awal function kita.


function useStrictMode(){
    "use strict"
    const person = {
        firstName: "Kadek Frama"
    }

    with(person){
        console.info(firstName);
    }
}

useStrictMode();


// NB: Strict Mode ini dapat berguna untuk programmer javascript. Apabila terjadi error pada program, menggunakan strict mode akan memberitahukan terjadi error dan
// strict mode juga dapat merekomendasikan kode-kode yang sudah tidak layak digunakan lagi di Javascript.