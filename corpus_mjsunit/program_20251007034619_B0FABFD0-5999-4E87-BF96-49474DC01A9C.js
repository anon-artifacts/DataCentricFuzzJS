class C0 {
}
let v1;
try { v1 = new C0(); } catch (e) {}
let x = v1;
let v4;
try { v4 = C0.bind(this); } catch (e) {}
C0 = v4;
function foo(a6) {
    a6?.foo;
    return a6 instanceof C0;
}
try { noInline(foo); } catch (e) {}
for (let i12 = 0; i12 < 1000; ++i12) {
    let v18;
    try { v18 = foo(x); } catch (e) {}
    let r = v18;
    if (r !== true) {
        let v24;
        try { v24 = new Error("Bad"); } catch (e) {}
        throw v24;
    }
}
