// variable global / window variable
var a = 1;

function tes() {
    var a = 2;
    console.log(a + ' = variabel lokal');
}

tes();
console.log(a + ' = variabel global');