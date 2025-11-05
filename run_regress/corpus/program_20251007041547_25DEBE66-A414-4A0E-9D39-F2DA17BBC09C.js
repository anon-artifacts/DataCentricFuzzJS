function f0() {
}
const v3 = new ArrayBuffer(2);
var x = v3;
function f5(a6) {
    try {
        x.__proto__ = a6;
        return false;
    } catch(e8) {
        return true;
    }
}
var test = f5;
test(x);
test({});
test(null);
f0(true, true);
