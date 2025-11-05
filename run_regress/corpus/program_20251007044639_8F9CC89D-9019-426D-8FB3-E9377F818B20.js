function foo(a1, a2) {
    if (a2 > 200) {
        a1 = bar;
    }
    let v6;
    try { v6 = a1(); } catch (e) {}
    return v6?.f;
}
try { noInline(foo); } catch (e) {}
var object;
function bar() {
    return object;
}
function baz() {
    return { f: 42 };
}
object = { f: 42 };
for (let i19 = 0; i19 < 1000; ++i19) {
    const v27 = i19 & 1 ? bar : baz;
    try { foo(v27, i19); } catch (e) {}
}
object = { e: 1, f: 2 };
let v33;
try { v33 = foo(bar, 0); } catch (e) {}
var result = v33;
