//Kode Program Javascript

const tampil = document.getElementById('tampil');
function faktorial(){
    let i, no, fakt;
    fakt = 1;

    no = document.getElementById("angka");
    let angka = Number(no.value);

    //proses validasi untuk memastikan inputan sudah diisi.
    if(angka != ""){
        //proses perulangan untuk melakukan perhitungan faktorial
        for(i = 1; i <= angka; i++){        
            fakt = fakt * i;
        };
    }else if(angka == ""){
        fakt = "Inputkan Terlebih Dahulu Bilangannya Yaa!!";
    }

    let tampilkan = fakt;
    tampil.insertAdjacentHTML('afterbegin', `<p>${tampilkan}</p>`);
};