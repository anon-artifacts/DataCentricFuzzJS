function Cons1() {
}
const t2 = Cons1?.prototype;
t2.f = 42;
function Cons2() {
}
function f5() {
    counter++;
    return 84;
}
const v9 = Cons2?.prototype;
try { v9.__defineGetter__("f", f5); } catch (e) {}
function foo(a12) {
    return a12?.f;
}
try { noInline(foo); } catch (e) {}
var counter = 0;
function test(a19, a20, a21) {
    let v22;
    try { v22 = foo(a19); } catch (e) {}
    var result = v22;
    if (result != a20) {
        const v27 = "Bad result: " + result;
        let v28;
        try { v28 = new Error(v27); } catch (e) {}
        throw v28;
    }
    if (counter != a21) {
        const v32 = "Bad counter value: " + counter;
        let v33;
        try { v33 = new Error(v32); } catch (e) {}
        throw v33;
    }
}
for (let i35 = 0; i35 < 100000; ++i35) {
    let v41;
    try { v41 = new Cons2(); } catch (e) {}
    const v44 = counter + 1;
    try { test(v41, 84, v44); } catch (e) {}
    let v46;
    try { v46 = new Cons1(); } catch (e) {}
    try { test(v46, 42, counter); } catch (e) {}
}
