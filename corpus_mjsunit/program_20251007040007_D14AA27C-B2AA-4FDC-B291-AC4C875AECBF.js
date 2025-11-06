function f0() {
}
var BUGNUMBER = 453249;
var summary = "Do not assert with JIT: s0->isQuad()";
var actual = "No Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
const t6 = this.__proto__;
t6.a = 3;
for (let i15 = 0; i15 < 4; ++i15) {
    [a];
}
this.a = 3;
for (let i26 = 0; i26 < 4; ++i26) {
    [a];
}
f0(expect, actual, summary);
