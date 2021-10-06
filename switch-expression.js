// switch case adalah statement percabangan yaang sama dengan if, namun lebih sederhana cara pembuatannya.
// kondisi di switch statement hanya untuk perbandingan sama dengan "==".

let nilai = "B";

switch(nilai){
    case "A":
        document.writeln("<p>Kerenn, Tetap Semangat!</p>");
        break;
    case "B":
        document.writeln("<p>Anda Lulus dengan baik, Selamat dan tetap semangat ya!</p>");
        break;
    case "C":
        document.writeln("<p>Tetap Semangat!</p>");
        break;
    case "D":
        document.writeln("<p>Bangkit 2021</p>");
        break;
    default:
        document.writeln("<p>Harus Tetap Semangat!!!</p>");

}