var m = Math;
var p = "floor";
function test() {
    var bignumber = 31363200000;
    m[p](Math.round(bignumber / 86400000) / 7) + 1;
}
test();
