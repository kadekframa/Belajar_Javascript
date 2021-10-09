// for adalah salah satu kata kunci yang bisa digunakan untuk melakukan perulangan.

/* blok perulangan
for(init statement;kondisi;post statement){
    ...
}
*/

// - init statement akan dieksekusi hanya sekali di awal sebelum perulangan.
// - kondisi akan dilakukan pengecekan dalam setiap perulangan, jika true perulangan akan dilakukan, jika false perulangan akan berhenti.
// - post statement akan dieksekusi setiap kali diakhir perulangan.
// - apabila ketika statement pada for tidak diisi, maka akan dibaca true secara terus menerus dan kemungkinan akan terjadi error pada browser karena perulangan yang tidak berhenti.

// contoh 1

for (let counter = 1;counter <= 10;counter ++){
    document.writeln(`<p>Perulangan Ke Berapa Ya: ${counter}</p>`);
};