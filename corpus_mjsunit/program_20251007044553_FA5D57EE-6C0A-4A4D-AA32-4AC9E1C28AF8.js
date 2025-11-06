function f0() {
}
var BUGNUMBER = 452495;
var summary = "Do not crash with JIT: @ TraceRecorder::getThis";
var actual = "No Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
for (let i12 = 0; i12 < 4; ++i12) {
    try {
        const t10 = 1;
        new t10(this);
    } catch(e21) {
    }
}
f0(expect, actual, summary);
