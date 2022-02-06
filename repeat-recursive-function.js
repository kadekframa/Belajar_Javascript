// Recursive Function pada JavaScript.

// Recursive function adalah kemampuan function memanggil function dirinya sendiri.
// Kadang memang ada banyak problem, yang lebih mudah diselesaikan menggunakan recursive function, seperti contohnya kasus faktorial.

// Contoh kasus faktorial bilangan.

function factorial(value){                      // contoh penyelesaian kasus faktorial dengan perulangan biasa.
    let result = 1;
    for (let i = 1; i <= value; i++) {
        result *= i;
    }
    return result;
}

document.writeln(factorial(5));


function factorialRecursive(values){            // contoh penyelesaian kasus faktorial dengan menggunakan recursive function.
    if(values === 1){
        return 1;
    }else{
        return values * factorialRecursive(values - 1);
    }
}

document.writeln(`<p>${factorialRecursive(5)}</p>`);


// NB: Harus Tetap Semangat Berlatih !!!, Kembali menjadi lebih Kuat !!!, Semangat !!!