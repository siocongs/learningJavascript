// Function Literal
// var user = {
//     name : "yilon ma",
//     age : 12,
//     job : "founder spaceX",
//     ips : [3.20, 3.00, 2.80, 3.28],
//     alamat : {
//         jalan : "Pahlawan XII",
//         kelurahan : "Citayem",
//         kabupaten : "Bekasi",
//         kodePos : 18861
//     }
// };
// console.log(user.job);

// Function Declaration
// function objectUserWarnet(nama, usia, telp) {
//     var user = {};
//     user.nama = nama;
//     user.usia = usia;
//     user.telp = telp;
//     return user;
// }
// var user1 = objectUserWarnet('bill gates', 25, 089508);
// console.log(user1);

// Constructor
function User(nama, usia, telp) {
    // var this = {};
    this.nama = nama;
    this.usia = usia;
    this.telp = telp;
    // return this;
}
var user2 = new User('bill gates', 25, 6289508);