var num = prompt('Masukan Angka:');

if (num % 2 == 0) {
    alert(num + ' Adalah bilangan GENAP');
} else if (num % 2 == 1) {
    alert(num + ' Adalah bilangan GANJIL');
} else {
    alert('Not number input');
}