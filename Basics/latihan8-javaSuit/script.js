var ask = prompt('Want to Play? (Yes / No)');
if(ask == 'Yes' || ask == 'yes') {
    // pilihan player
    var p = prompt('choose : elephant, ant, people');

    // pilihan computer
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'elephant';
    } else if(comp >= 0.34 && comp < 0.67) {
        comp = 'people';
    } else {
        comp = 'ant';
    }

    // tentukan rules
    if(p == comp) {
        hasil = 'DRAW';
    } else if(p == 'elephant') {
        // if (comp == 'people') {
        //     hasil = 'You WINN $99 USD!!'
        // } else {
        //     hasil = 'LoOOsSeeRR!'
        // }
        hasil = (comp == 'people') ? 'You WINN $99 USD!!' : 'LoOOsSeeRR!';
    } else if (p == 'people') {
        hasil = (comp == 'ant') ? 'You WINN $99 USD!!' : 'LoOOsSeeRR!';
    } else if(p == 'ant') {
        hasil = (comp == 'elephant') ? 'You WINN $99 USD!!' : 'LoOOsSeeRR!';
    } else {
        hasil = 'Wrong choose ****!!'
    }

    // show result
    alert('My IBM Computer choose : ' + comp + '\nYour Choose is : ' + p + '\nThe result is : ' + hasil);

    ask = prompt('Play Again? (Yes / No)');
}

