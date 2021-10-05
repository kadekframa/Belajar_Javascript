const person = {}; // membuat object kosong
        
        // menambah atau mengubah data atribute dan object
        person["nama"] = "Kadek Frama"; // dalam hal ini "nama" adalah atribute, sedangkan "Kadek Frama" adalah data object.
        person["asal"] = "Gianyar";     // "asal" adalah atribute, "Gianyar" adalah data object.
        person["umur"] = 21;            // "umur" adalah atribute atau propety. sedangkan 21 adalah data object.

        console.table(person); // menampilkan data table object person di console.


        // Membuat data pada object juga dapat dilakukan dengan cara berikut.
        const orang = {
            "nama depan"    : "Putu",
            nama_panggilan  : "Tude",
            alamat          : "Badung",
            umur            : 24
        };
        console.table(orang); // tampil data table object di console

        delete orang["nama_panggilan"]; // menghapus data "nama_panggilan" pada object orang.
        console.table(orang);


        // Untuk mengakses atribute tertentu dari object dapat dilakukan dengan cara berikut.
        console.info(`Nama      : ${orang["nama depan"]}`); // untuk mengakses atribute/property lebih dari satu kata dapat menggunakan kurung siku "[]".
        console.info(`Alamat    : ${orang.alamat}`);        // untuk mengakses atribute/property hanyar dengan satu kata.
        console.info(`Umur      : ${orang.umur}`);