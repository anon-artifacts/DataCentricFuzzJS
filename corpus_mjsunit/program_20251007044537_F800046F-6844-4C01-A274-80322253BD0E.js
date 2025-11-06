function TestInlineCompare(a1) {
    a1.f();
    var x = a1.f();
    a1.f();
    if (a1.f()) {
    }
}
var o = {};
function f10() {
    return 0 === 1;
}
o.f = f10;
for (let i15 = 0; i15 < 5; i15++) {
    TestInlineCompare(o);
}
TestInlineCompare(o);
const v23 = o.f;
TestInlineCompare({ f: v23 });
