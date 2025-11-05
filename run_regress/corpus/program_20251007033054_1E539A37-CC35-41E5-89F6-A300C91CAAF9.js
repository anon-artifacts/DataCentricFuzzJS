function f0() {
}
var summary = "gen.toString() omitting 'yield' from value";
var actual;
var expect;
f0(summary);
var failed = false;
function* gen() {
    yield 17;
}
try {
    var str = gen.toString();
    var index = str.search(/yield/);
    if (index < 0) {
        throw "yield not found in str: " + str;
    }
} catch(e22) {
    failed = e22;
}
f0(expect = false, actual = failed, summary);
