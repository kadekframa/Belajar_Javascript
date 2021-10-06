const nilaiUjian = 74;
            const nilaiAbsensi = 80;

            const lulusUjian = nilaiUjian > 75;
            const lulusAbsensi = nilaiAbsensi > 75;

            const lulus = lulusUjian && lulusAbsensi;
            document.writeln("<p>" + lulus + "</p>");

            const kelulusan = lulusUjian || lulusAbsensi;
            document.writeln("<p>" + kelulusan + "</p>");