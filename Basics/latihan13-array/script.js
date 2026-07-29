// Manipulasi Array

// 1. Menambah isi array
// var arr = [];
// arr[0] = 'My';
// arr[1] = 'Mine';
// arr[2] = 'Bini';
// arr[6] = 'Gwej';
// console.log(arr)

// 2. Delete isi Array
// var arr = ['My', 'Mine', 'Bini'];
// arr[1] = undefined;
// console.log(arr[1]);

// 3. Show array
// var arr = ['My', 'Mine', Bini', 'Gwej'];
// for(var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// Method Array
var arr = ['My', 'Mine', 'Bini', 'Gwej'];
// 1. Join
// console.log(arr.join(' - '));

// 2. Push & Pop
// arr.push('Inikan', 'Bukankah')
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));

// 3. Unshift & Shift
// arr.unshift('Inikan')
// arr.shift();
// console.log(arr.join(' - '));

// 4. Splice & Slice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// arr.splice(1, 0, 'Inikan');
// arr.splice(1, 1, 'Inikan');
// console.log(arr.join(' - '));

// slice(indexAwal, indexAkhir)
// var arr2 = arr.slice(1, 3);
// console.log(arr2.join(' - '));

// 5. Foreach
// var num = [1, 2, 3, 4, 5, 6, 7, 8];
// var mhs = ['Elon', 'Poseidon', 'Sokrates', 'Einstein', 'Rindaman', 'Newton']
// num.forEach(function(nilai, index) {
//     console.log('Mahasiswa ke-' + index + ' adalah : ' + nilai);
// })
 
// 6. Map
// var num = [1, 2, 3, 4, 5, 6, 7, 8];
// var num2 = num.map(function(nilai) {
//     return nilai * 2;
// });
// console.log(num2.join(' - '));

// 7. Sort
// var num = [2, 1, 3, 5, 10, 20, 4, 7, 8, 6];
// num.sort(function(b, a) {
//     return b-a;
// });
// console.log(num.join(' - '));

// 8. Filter & Find
var num = [2, 1, 3, 5, 10, 20, 4, 7, 8, 6];
var num2 = num.filter(function(nilai) {
    return nilai == 5;
})
console.log('filter : ' + num2.join(' - '));

var num2 = num.find(function(nilai) {
    return nilai > 10;
})
console.log('find : ' + num2);