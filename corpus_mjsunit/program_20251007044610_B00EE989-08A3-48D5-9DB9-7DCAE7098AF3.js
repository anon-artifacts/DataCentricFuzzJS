var NotNegZero = 0;
var NegZero = 0;
function checkisnegativezero(a5, a6) {
    if ((a5 != 0) || ((1 / a5) >= 0)) {
        NotNegZero++;
    } else {
        NegZero++;
    }
}
var Y = 0;
var X = -5;
var one = 1;
const v24 = new Array();
var A = v24;
function foo(a27, a28) {
    checkisnegativezero(a27 % a28);
    foo2(a27);
}
function foo2(a34) {
    checkisnegativezero(a34 % 2);
}
for (let i39 = 0; i39 < 2000; i39++) {
    foo(2, 2);
}
foo(-2, 2);
if ((NotNegZero != 4000) || (NegZero != 2)) {
    print("FAILED\n");
} else {
    print("Passed\n");
}
