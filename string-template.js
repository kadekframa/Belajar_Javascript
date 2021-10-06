//string template biasanya tidak menggunakan tanda "" (petik dua), melainkan menggunakan tanda `` (backtick).
            
            //contoh 1
            let semangat = "tetap semangat";
            let juang = "tetap berjuang";
            let giat = "tetap bergiat !!!";
            const template = `Kita harus ${semangat}, ${juang}, ${giat}`; //string template
            document.writeln(template);
            console.info(template);

            //contoh 2
            let name = "Kadek Frama";
            const nilai = 90;
            const template2 = `Name  : ${name}, Lulus : ${nilai > 80}`; //string template
            console.info(template2);


            //contoh Multiline String
            const multiLineString = `Hallo, 
            tetap semangat
            tetap 
            bergiat, 
            tetap berjuang !!!`;
            
            document.writeln(multiLineString);