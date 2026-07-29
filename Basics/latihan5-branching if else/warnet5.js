for (var noKomputer = 1; noKomputer <= 10; noKomputer++) {
    if (noKomputer <= 6) {
        console.log('Komputer No. ' + noKomputer + ' Beroperasi dengan baik.');
    } else if (noKomputer === 8 || noKomputer === 10) {
        console.log('Komputer No. ' + noKomputer + ' sedang di service.');
    } else {
        console.log('Komputer No. ' + noKomputer + ' sedang tidak beroperasi.');
    } 
}