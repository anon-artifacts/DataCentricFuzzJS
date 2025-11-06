function f0() {
}
var BUGNUMBER = 424311;
var summary = "Do not assert: entry->kpc == ((PCVCAP_TAG(entry->vcap) > 1) ? (jsbytecode *) JSID_TO_ATOM(id) : cx->fp->regs->pc)";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function f14() {
        function f15() {
            constructor = {};
        }
        f15();
    }
    f14();
    f0(expect, actual, summary);
}
