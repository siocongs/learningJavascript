var item = prompt('input nama makanan / minuman : \n (contoh: nasi, daging, susu, burger, matcha)');

switch(item) {
    case 'nasi' :
    case 'daging' :
    case 'susu' :
        alert('HEALTHY food / drink!')
        break;
    case 'burger' :
    case 'matcha' :
        alert('NOT HEALTHY food / drink!')
        break;
    default :
        alert('wrong food / drink!')
        break;
}