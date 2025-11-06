function f0() {
}
var BUGNUMBER = 322957;
var summary = "TryMethod should not eat getter exceptions";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
const v13 = {
    get toSource() {
        throw "EXCEPTION";
    },
};
var obj = v13;
var got_proper_exception = -1;
try {
    uneval(obj);
} catch(e20) {
    got_proper_exception = e20 === "EXCEPTION";
}
f0(expect = true, actual = got_proper_exception, summary);
