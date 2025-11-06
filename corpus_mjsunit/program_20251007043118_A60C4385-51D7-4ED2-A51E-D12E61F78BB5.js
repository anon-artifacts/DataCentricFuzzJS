function assert(a1) {
}
try { noInline(assert); } catch (e) {}
const v8 = {
    x: 20,
    y: 40,
    z: 50,
    get f() {
    },
};
let oThrow = v8;
let o1 = { x: 20, f: 40 };
const v19 = {
    x: 20,
    y: 50,
    f: 500,
    get f() {
        return 20;
    },
};
let o2 = v19;
function foo(a22) {
    let v23;
    try { v23 = a22(); } catch (e) {}
    let o = v23;
    try {
        o = o?.f;
    } catch(e26) {
        o === oThrow;
    }
}
try { noInline(foo); } catch (e) {}
let i;
let flag = false;
function f() {
    if (flag) {
        return oThrow;
    }
    if (i % 2) {
        return o1;
    }
    return o2;
}
try { noInline(f); } catch (e) {}
for ((() => {
        i = 0;
    })();
    i < 10000;
    i++) {
    try { foo(f); } catch (e) {}
}
flag = true;
try { foo(f); } catch (e) {}
