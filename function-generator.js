// Function generator adalah function yang digunakan untk membuat data generator.
// Generator adalah data yang bisa di integrasi seperti Array.
// Untuk membuat function generator, kita perlu menggunakan tanda * (bintang) setelah kata function.
// dan untuk mengembalikan data di tiap iterasi, kita bisa gunakan kata kunci yield diikuti datanya.

// Contoh penggunaan function generator.
function* createNames(){
    yield "Kadek";
    yield "Frama";
    yield "Danamastyana";

};

const names = createNames();
for (const name of names) {
    console.info(name);
    document.writeln(name);
}



// contoh penggunaan function generator yang kompleks.

// function dengan generator. (lazy)
function* buatGanjil(value){
    for(let i = 1; i <= value; i++){
        if(i % 2 === 1){
            console.info(`Yieldnya ${i}`);
            yield i;
        }

    }
}

// function dengan array. (eager)
function buatGanjilArray(value){
    const result = [];
    for(let i = 1; i <= value; i++){
        if(i % 2 === 1){
            console.info(`Yieldnya ${i}`);
            result.push(i);
        }
    }
    return result;
}


// menyimpan function buatGanjil() yang sudah diisi parameter ke dalam variabel numbers.
const numbers = buatGanjilArray(10);         //menyimpan function ke dalam variabel number.
for (const number of numbers) {         //melakukan iterasi terhadap value dari function untuk ditampilkan ke console.
    console.info(number);
}