// secara default function itu tidak menghasilkan value apapun, namun jika kita ingin, kita bisa membuat sebuah function mengembalikan value.
// agar function bisa menghasilkan value, kita bisa menggunakan kata kunci return di dalam function nya.
// Dan di dalam block function, untuk nilai tersebut, kita harus menggunakan kata kunci return, lalu diikuti dengan data yang ingin kita hasilkan.
// Function hanya bisa mengembalikan satu data, jika kita ingin mengembalikan beberapa data sekaligus, kita bisa menggunakan Array sebagai return value nya.


// contoh penggunaan function return value.
//contoh 1.
// membuat function dengan parameter dan return value.
function sayHello(firstName, lastName){
    const say = `Hello ${firstName} ${lastName}`;
    return say;
};

// memanggil function dan menangkap return value nya.
const result = sayHello("Kadek Frama", "Danamastyana");
document.writeln(`<p>${result}</p>`);



// contoh 2. Fucntion return value lebih dari satu.
//membuat function dengan parameter dan return value.
function getFinalScore(value){
    if(value > 90){
        return "A";
    }else if(value > 80){
        return "B";
    }else if(value > 70){
        return "C";
    }else if(value > 60){
        return "D";
    }else{
        return "E";
    }

};

// memanggil function dengan parameter dan return value.
const nilai = getFinalScore(94);
document.writeln(`<p>Nilai nya adalah : ${nilai}</p>`);



// contoh 3. Menghentikan eksekusi dengan return. return juga dapat digunakan untuk menghentikan eksekusi pada sebuah function.
//membuat function
function isContains(array, searchValue){
    for(const element of array){
        console.info(`Iterasi Element ${element}`);
        document.writeln(element)
        if(element === searchValue){
            return true;                                // jadi apabila sudah menemukan return, maka code setelah return tidak akan dieksekusi atau berhenti sampai return saja.
        }
    }
    return false;
}

// memanggil function dengan parameter dan return value nya.
const arrayData = [1, 34, 45,657,7988,9,90,9068, 94];
const search =  90;

const found = isContains(arrayData, search);
document.writeln(`<p>${found}</p>`);