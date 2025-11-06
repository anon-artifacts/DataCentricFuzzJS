function f0() {
}
var BUGNUMBER = 501124;
var summary = "Crypotographic login routines";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    var hexVal = "00000000000000000000000000000000DEADBABE";
    var nblk = (((hexVal.length / 2) + 8) >> 6) + 1;
    const v29 = new Array(nblk * 16);
    var blks = v29;
    for (let i32 = 0; i32 < (nblk * 16); i32++) {
        blks[i32] = 0;
    }
    for (i = 0; i < hexVal.length; i++) {
        const v57 = ("0x" + hexVal.charAt(i)) << (28 - ((i % 8) * 4));
        blks[i >> 3] |= v57;
    }
    f0(expect = "0,0,0,0,-559039810,0,0,0,0,0,0,0,0,0,0,0", actual = blks + "", summary);
}
