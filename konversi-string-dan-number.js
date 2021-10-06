//Contoh pengguanaan parseInt(), parseFloat(), Number() dan number.toString()

        // contoh 1
        const value1 = "10";
        const value2 = 1;
        const sum = parseInt(value1) + value2; //parseInt : menggkonversi data string menjadi bentuk bilangan bulat

        document.writeln(`<p> ${sum} </p>`);


        // contoh 2
        const angka1 = "1.1";
        const angkat2 = 1.4;
        const sum2 = parseFloat(angka1) + parseFloat(angkat2); //parseFloat : mengkonversi data string menjadi bentuk bilangan pecahan/desimal

        document.writeln(`<p> ${sum2} </p>`);

        // contoh 3
        const nomor1 = "5";
        const nomor2 = 7;
        const sum3 = Number(nomor1) + nomor2;

        document.writeln(`<p> ${sum3} </p>`);

        //contoh 4
        const number1 = 123;
        const number2 = 456;
        const stringNew = number1.toString() + ` ${number2.toString()}`; // .toString() : mengkonversi data number menjadi bentuk string

        document.writeln(`Hasil perubahan dari number to string adalah : ${stringNew}`);
        
        console.info(stringNew);