// null merupakan representasi data kosong.
// null berbeda dengan undefined, null berarti variable sudah ditambahkan valuenya, hanya saya value nya null.

// sedangkan undefined adalah variable yang belum ditambahkan valuenya.

let myName = null;

if(myName === undefined){
    alert("UNDEFINED");
}else if(myName === null){
    alert("NULL yaa");
}else{
    alert(myName);
}