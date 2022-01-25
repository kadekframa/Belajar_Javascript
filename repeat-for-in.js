// For in pada JavaScript.

// For ini merupakan perulangan for yang digunakan untuk melakukan iterasi seluruh data propoerty di object atau index di array.
// Walaupun for in bisa digunakan untuk array, namun tidak direkomendasikan untuk array, karena biasanya kita jarang sekali butuh data index untuk array, kita bisa menggunakan for of.

 const person = {
    firstName: "Kadek",
    middleName: "Frama",
    lastName: "Danamastyana"
 };

 for(const property in person){
     document.writeln(`<p>Property ${property} : ${person[property]}</p>`);
 };