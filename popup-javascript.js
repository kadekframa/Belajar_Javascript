// Popup pada Javascript ada tiga, yaitu: alert(), prompt() dan confirm()

// popup alert().
alert("Selamat Belajar Javascript :)");
alert("Belajar Javascript Asik dan Menyenangkan ya, Tetap Semangat!!!");


// popup prompt().
const nama = prompt("Boleh saya tahu siapa nama Anda? :)"); //fungsi prompt() sendiri berfungsi untuk meminta input data kepada user. Dalam hal ini variabel "nama" akan menampung data yang diinput oleh user pada fungsi prompt().
    alert(`Hallo ${nama}. Tetap Semangat!`);


// popup confirm().
const gabung = confirm("Apakah Anda yakin ingin bergabung? :)"); //fungsi confirm() sendiri berfungsi untuk memberi opsi kepada user untuk menjawab pertanyaan ataupun pernyataan tertentu.
    const names = prompt("Siapa Nama Anda?");
    alert(`Hallo ${names}, Selamat Bergabung yaa :)`);
    document.writeln(`<center><h1> Selamat Bergabung ${names} :)</h1></center>`);