function Warnet(op, trayek, user, income) {
    this.op = op;
    this.trayek = trayek;
    this.user = user;
    this.income = income;

    this.userMasuk = function(namaUser) {
        this.user.push(namaUser);
        return this.user;
    }

    this.userKeluar = function(namaUser, bayar) {
        if (this.user.length === 0) {
            alert('warnet masih kosong');
            return false;
        }

        for(var i = 0; i < this.user.length; i++) {
            if (this.user[i] == namaUser) {
                this.user[i] = undefined;
                this.income  += bayar;
                return this.user;
            }
        }
    }
}

var warnet1 = new Warnet('Kim jong un', ['Xbox', 'Playstation'], [], 0);
var warnet2 = new Warnet('Putin', ['Xbox', 'PC'], [], 0);