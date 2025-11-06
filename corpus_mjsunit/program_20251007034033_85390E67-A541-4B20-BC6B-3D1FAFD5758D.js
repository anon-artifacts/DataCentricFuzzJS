function BigInteger(a1, a2, a3) {
    const v5 = new Array();
    this.array = v5;
    if (a1 != null) {
        var this_array = this.array;
        this.t = 0;
        var i = a1.length;
        while (--i >= 0) {
            let v21 = this.t;
            this_array[v21++] = 0;
        }
    }
}
function bnpCopyTo(a24, a25) {
    var this_array = a25.array;
    for (let i31 = a25.t - 1; i31 >= 0; --i31) {
        const v38 = a25.array[i31];
        const t17 = a24.array;
        t17[i31] = v38;
    }
    a24.t = a25.t;
}
function montConvert(a42) {
    const v44 = new BigInteger(null);
    var r = v44;
    r.t = 56;
    return r;
}
const v48 = new Array();
var ba = v48;
const v50 = new BigInteger(ba);
a = v50;
new BigInteger("afdsafdsafdsaafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsfds");
g = montConvert(a);
const v58 = new BigInteger(null);
var r = v58;
bnpCopyTo(r, g);
