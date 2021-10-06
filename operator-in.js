// in operator adalah operator yang bisa dilakukan untuk mengecek apakah sebuah property ada di dalam object atau tidak.
// Jika property tersebut ada di object, maka hasilnya true, sedangkan jika tidak, maka hasilnya false.

const person = {
    firstName : "Kadek",
    lastName  : "Frama"
}

if("firstName" in person){
    alert(`Hallo ${person.firstName}`);
}else{
    alert("Hallo..");
}