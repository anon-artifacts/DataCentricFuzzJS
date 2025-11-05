var o = {};
const v4 = Math?.pow;
try { o.__defineSetter__("foo", v4); } catch (e) {}
function foo() {
    o.foo = 42;
}
try { noInline(foo); } catch (e) {}
for (let i11 = 0; i11 < 10000; ++i11) {
    try { foo(); } catch (e) {}
}
