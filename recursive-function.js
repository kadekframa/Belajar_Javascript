// recursive function adalah kemapuan function memanggil function dirinya sendiri.
// Kadang memang ada banyak problem, yang lebih mudah diselesaikan menggunakan recursive function, seperti contohnya kasus faktorial.

// contoh penggunaan recursive function.

// faktorial yang menggunakan perulangan biasa.
function factorial(value){
    let result = 1;
    for(let i = 1; i <= value; i++){
        result *= i;
    }
    return result;
};

console.info(factorial(5));


// faktorial yang menggunakan perulangan rekursive. Menggunakan perulangan rekursive akan terlihat lebih sederhana, namun perlu dipelajari lagi untuk dapat membiasakan penggunaannya.
function factorialRecursive(value){
    if(value === 1){
        return 1;
    }else{
        return value * factorialRecursive(value - 1);
    }
};

console.info(factorialRecursive(10));
document.writeln(factorialRecursive(5));