var user = [];
var tambahUser = function(namaUser, user) {
    // jika warnet kosong
    if (user.length == 0) {
        // tambah user diawal array
        user.push(namaUser);
        // kembalikan isi array & keluar function
        return user;
    } else {
        // telusuri seluruh pc dari awal
        for(var i = 0; i < user.length; i++) {
            // jika ada pc kosong
            if (user[i] == undefined) {
                // tambah user di pc tersebut
                user[i] = namaUser;
                // kembalikan isi array & keluar dari function
                return user;
            }
            // jika sudah ada nama yang sama
            else if(user[i] == namaUser) {
                // tampilkan kesalahannya
                console.log(namaUser + ' Sudah main di pc ' + i);
                // kembalikan isi array & keluar dari function
                return user;
            }
            // jika seluruh pc terisi
            else if(i == user.length - 1) {
                // tambah user di akhir array
                user.push(namaUser);
                // kembalikan isi array & keluar dari function
                return user;
            }
        }
    }
}

var hapusUser = function(namaUser, user) {
    if (user.length == 0) {
        console.log('Warnet masih kosong.');
    } else {
        for(var i = 0; i < user.length; i++) {
            if (user[i] == namaUser) {
                user[i] = undefined;
                return user;
            } else if (i == user.length - 1) {
                console.log(namaUser + 'Tidak ada diwarnet');
                return user;
            }
        }
    }

    return user;
}