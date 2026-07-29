// var a = 10;
// console.log(window == this);

// cara 1 - function declaration
// function halo() {
//     console.log('halo')
// }
// halo();
// (this) return object Global

// cara 2 - object literal
// var obj = {};
// obj.halo = function() {
    // console.log(this);
//     console.log('halo');
// }
// obj.nama = 'Yilon Ma';
// obj.halo();
// return object yang bersangkutan

// cara 3 - constructor
function halo() {
    console.log(this);
    console.log('halo');
}
new halo();
// (this) return newly created object