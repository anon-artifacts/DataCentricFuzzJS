function f0() {
}
var BUGNUMBER = 352640;
var summary = "Do not assert: scopeStmt or crash @ js_LexicalLookup";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    try {
        new Function("switch(w) { case 2: with({}) let y; case 3: }");
    } catch(e17) {
    }
    f0(expect, actual, summary);
}
