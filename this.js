// Kata kunci this di JavaScript.
// Kata kunci this adalah referensi ke object milik siapa.
// Dalam object method, this merupakan referensi ke object pemilik function nya.
// Di global scope, this merupakan referensi ke global object (di browser biasanya window).
// Dalam function, this merupakan referensi ke global object (di browser biasanya window).
// Di function dengan strict mode (akan dibahas nanti), this adalah undefined.
// Dalam event, this merupakan referensi ke element yang menerima event (dibahas di materi Document Object Model).

// Contoh peggunaan kata kunci this di JavaScript.

// this di global scope.
console.info(this);         // window

// this di function scope.
function sample(){
    console.info(this);     // window
};

sample();

// this di nested function.
function sample2(){
    function nested(){
        console.info(this); // window
    }

    nested();
}

sample2();



// this di object method.
const person = {
    name: "Kadek",
    sayHello: function (value){
        console.info(`Hello ${value} My Name is ${this.name}`); // di object, this merupakan referensi ke pemiliki function atau object method nya ( dalam hal ini object nya adalah person).
    }
};

person.sayHello("Kadek Frama");     // memanggil object method di object person.