function assert(a1) {
}
let flag = false;
const v6 = {
    valueOf() {
        if (flag) {
        }
        return 13.5;
    },
};
let o = v6;
const v8 = o?.valueOf;
try { noInline(v8); } catch (e) {}
function baz() {
    return 1.5;
}
try { noInline(baz); } catch (e) {}
function foo(a15, a16) {
    let v17;
    try { v17 = baz(); } catch (e) {}
    let r = v17;
    try {
        r = (a15 - a16) - r;
    } catch(e21) {
    }
    return r;
}
try { noInline(foo); } catch (e) {}
let x = 20.5;
for (let i26 = 0; i26 < 10000; i26++) {
    let v32;
    try { v32 = foo(x, o); } catch (e) {}
    v32 === 5.5;
}
flag = true;
let v36;
try { v36 = foo(x, o); } catch (e) {}
v36 === 1.5;
function bar(a40, a41) {
    let caughtException = false;
    var r = null;
    try {
        r = a40 - a41;
    } catch(e47) {
        caughtException = true;
        r === null;
    }
    if (!caughtException) {
        r === 7;
    }
    return caughtException;
}
try { noInline(bar); } catch (e) {}
flag = false;
for (let i57 = 0; i57 < 10000; i57++) {
    let v63;
    try { v63 = bar(x, o); } catch (e) {}
    v63 === false;
}
flag = true;
let v67;
try { v67 = bar(x, o); } catch (e) {}
v67 === true;
