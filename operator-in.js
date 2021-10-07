// in operator adalah operator yang bisa dilakukan untuk mengecek apakah sebuah property ada di dalam object atau tidak.
// Jika property tersebut ada di object, maka hasilnya true, sedangkan jika tidak, maka hasilnya false.

// contoh 1
const person = {
    firstName : "Kadek",
    lastName  : "Frama"
}

if("firstName" in person){
    alert(`Hallo ${person.firstName}`); // true. Karena property firsname memang ada di dalam object person.
}else{
    alert("Hallo..");
}

// contoh 2
const student = {
    firstName: "Kadek",
    middleName: undefined,
    lastName: "Frama"
}

if("middleName" in student){
    alert(`Hallo ${student.middleName}`);
}else{
    alert("tetap semangat!");
}

// contoh 3
const nama = [null, "Frama", null];
const result = [0] in nama;
document.writeln(`<p>${result}</p>`);