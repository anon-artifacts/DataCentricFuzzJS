function f0() {
}
var BUGNUMBER = 455380;
var summary = "Do not assert with JIT: !lhs->isQuad() && !rhs->isQuad()";
var actual = "No Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
const IS_TOKEN_ARRAY = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1];
function f140(a141) {
    if (a141 == "") {
        throw "error: empty string";
    }
    for (let i147 = 0, i148 = a141.length; i147 < i148; i147++) {
        if (!IS_TOKEN_ARRAY[a141.charCodeAt(i147)]) {
            throw a141 + " is not a valid header field name!";
        }
    }
    return a141.toLowerCase();
}
const headerUtils = { normalizeFieldName: f140 };
headerUtils.normalizeFieldName("Host");
f0(expect, actual, summary);
