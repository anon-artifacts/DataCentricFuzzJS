function f0() {
}
var BUGNUMBER = 464418;
var summary = "Do not assert: fp->slots + fp->script->nfixed + " + "js_ReconstructStackDepth(cx, fp->script, fp->regs->pc) == fp->regs->sp";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    if (typeof gczeal == "function") {
        gczeal(2);
    }
    for (let i23 = 0; i23 < 50; ++i23) {
        const v31 = new Function("for (var i = 0; i < 5; ++i) { } ");
        v31();
        var w = ("r").match(/r/);
        const v38 = new Function("for (var j = 0; j < 1; ++j) { } ");
        v38();
    }
    if (typeof gczeal == "function") {
        gczeal(0);
    }
    f0(expect, actual, summary);
}
