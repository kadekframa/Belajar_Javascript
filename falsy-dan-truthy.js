// falsy dan truthy.

// falsy adalah value yang ketika dalam konteks boolean, dia dianggap false.
// Ini adalah adalah fitur yang unik dari JavaScript, yang berguna namun kadang juga sering membingungkan.
// Jadi di JavaScript, kondisi itu tidak hanya bisa boolean, tapi diluar boolean pun bisa, namun kita harus tahu beberapa data falsy, atau dianggap false.

/*

Data dianggap falsy   |             Keterangan
- false               |   boolean false
- 0,-0                |   Number 0 dan -0 dianggap false
- "",'',``            |   Semua strung kosong dianggap false
- null                |   null dianggap false
- undefined           |   undefined dianggap false
- Nan                 |   Not a Number dianggap false.

*/

/*
Data dianggap truthy
- Semua data selain yang ada pada data falsy (Kebalikan dari data falsy).
*/


// contoh 1
let data = 0;           // angka 0 akan terbaca false.

if(data){
    document.writeln("TRUE");
}else{
    document.writeln("FALSE");
}

// contoh 2
let data2 = {};         // object yang kosong akan terbaca true.
result = data2 ? "True yaa" : "Flase yaa";
document.writeln(`<p>${result}</p>`);


// contoh 3
let data3 = "";
hasil = data3 ? "True ini yaa" : "False ini yaa";
document.writeln(`<p>${hasil}</p>`);

// contoh 4
let data4 = "false";
trueIniYaa = data4 ? "True Ini Yaa hasilnya" : "Ini false yaa";
document.writeln(trueIniYaa);
