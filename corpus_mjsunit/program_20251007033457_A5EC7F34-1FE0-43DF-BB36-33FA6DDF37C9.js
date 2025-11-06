function clobber() {
}
try { noInline(clobber); } catch (e) {}
class C3 {
}
class C4 {
}
function foo(a6, a7) {
    try { clobber(); } catch (e) {}
    return a6 instanceof a7;
}
try { noInline(foo); } catch (e) {}
function access(a12) {
    return a12?.foo0;
}
try { noInline(access); } catch (e) {}
function theClass(a16) {
    if (a16 & 1) {
        return C3;
    }
    return C4;
}
try { noInline(theClass); } catch (e) {}
let v20;
try { v20 = new C3(); } catch (e) {}
let x = v20;
for (let i23 = 0; i23 < 1000; ++i23) {
    let v29;
    try { v29 = theClass(i23); } catch (e) {}
    let k = v29;
    if (i23 < 20) {
        k["foo" + i23] = i23;
    }
    if (i23 >= 20) {
        try { access(k); } catch (e) {}
    }
    if (i23 === 100) {
        k["foo" + i23] = i23;
    }
    let v42;
    try { v42 = foo(x, k); } catch (e) {}
    let result = v42;
    if ((k === C3) && (result !== true)) {
        let v50;
        try { v50 = new Error("Bad"); } catch (e) {}
        throw v50;
    }
    if ((k !== C3) && (result !== false)) {
        let v57;
        try { v57 = new Error("Bad"); } catch (e) {}
        throw v57;
    }
}
