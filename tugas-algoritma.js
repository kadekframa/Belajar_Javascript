// Kode Program Javascript
const tampil = document.getElementById('tampil');

function dicek(){
    let a = document.getElementById("nilaiA").value
    let b = document.getElementById("nilaiB").value
    let c = document.getElementById("nilaiC").value


    let newTampil;
    if(a > b && a > c){
        newTampil = `<p>Bilangan terbesar dari ${a}, ${b}, ${c} adalah bilangan : <b>${a}</b></p>`;
    }else if(b > a && b > c){
        newTampil = `<p>Bilangan terbesar dari ${a}, ${b}, ${c} adalah bilangan : <b>${b}</b></p>`;
    }else if(c > a && c > b){
        newTampil = `<p>Bilangan terbesar dari ${a}, ${b}, ${c} adalah bilangan : <b>${c}</b></p>`;
    }else{
        newTampil = "<p>Angka Belum Diinputkan, Silahkan Inputkan Angka Terlebih Dahulu!</p>";
    }


    let tampilkan = newTampil;

    tampil.insertAdjacentHTML('afterbegin', tampilkan);
}