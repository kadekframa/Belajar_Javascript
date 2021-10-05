const arrayKosong = []; //membuaat array kosong
        let arrayNama = ["Kadek", " Frama"];

        const names = [];       //array kosong
        names.push("Kadek");    //menambahkan data ke dalam array names.
        names.push("Frama Danamastyana");
        names.push(" Tetap Semangat !!!");

        document.writeln(arrayNama); //menampilkan data arrayNama pada halaman depan.
        document.writeln("<br>");
        document.writeln(names);

        names[1] = "345";
        
        delete names[1];        // menghapus data array dengan index 1.

        console.table(arrayNama);// menampilkan data table data arrayNama pada console.
        console.table(names);

        names[1] = "Bangkit 2021";  // mengubah data pada array names dengan index 1 menjadi "Bangkit 2021".
        names.push(1,2,3,4,5,6,7,8,9,10);// menambahkan data pada array names.

        console.info(names[1]);

        names.push(["array1", "array2", "array3", "array4", "array5"]);
        names.push("baru array");
        names.push("array Tetap semangat");
        names.push("array berjuang");
        names.push(["Array pantang menyerah"]);
        
        console.table(names);

        console.info(names.length);