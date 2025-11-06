function fast3bitlookup(a1) {
    var c;
    var bi3b = 59796;
    c = 3 & (bi3b >> ((a1 << 1) & 14));
    c += 3 & (bi3b >> ((a1 >> 2) & 14));
    c += 3 & (bi3b >> ((a1 >> 5) & 6));
    return c;
}
var ret = 0;
function TimeFunc(a30) {
    var x;
    var y;
    var t;
    for (let i38 = 0; i38 < 500; i38++) {
        for (let i45 = 0; i45 < 256; i45++) {
            ret += a30(i45);
        }
    }
}
TimeFunc(fast3bitlookup);
