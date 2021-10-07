// nullish coalescing operator "??" adalah null dan undefined. Jadi dua data ini disebut dengan nullish value.

// contoh 1
 let parameter;

    let data = parameter;
    if(data === undefined || data === null){      // undefined dan null disebut dengan nullish value pada javascript.
        data = "Nilai Default";
    }
    document.writeln(`<p>${data}</p>`);


    data = parameter ?? "Nilai Default Nullish Coalescing"; // contoh penggunaan nullish coalescing operator.
    document.writeln(`<p>${data}</p>`);