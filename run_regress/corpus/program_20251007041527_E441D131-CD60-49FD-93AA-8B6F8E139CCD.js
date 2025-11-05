class C0 {
}
function Bar() {
}
var numberOfGetPrototypeOfCalls = 0;
function f4() {
}
var doBadThings = f4;
const v7 = {};
const v12 = {
    getPrototypeOf() {
        numberOfGetPrototypeOfCalls++;
        try { doBadThings(); } catch (e) {}
        return C0?.prototype;
    },
};
let v13;
try { v13 = new Proxy(v7, v12); } catch (e) {}
Bar.prototype = v13;
var o = { f: 42 };
o.g = 43;
function foo(a19, a20, a21) {
    var result = a19?.f;
    var _ = a20 instanceof C0;
    a21.f = 11;
    return result + a19?.f;
}
try { noInline(foo); } catch (e) {}
for (let i32 = 0; i32 < 10000; ++i32) {
    const v39 = { f: 42 };
    let v40;
    try { v40 = new Bar(); } catch (e) {}
    const v42 = { f: 0 };
    let v43;
    try { v43 = foo(v39, v40, v42); } catch (e) {}
    var result = v43;
    if (result != 84) {
        throw "Error: bad result in loop: " + result;
    }
}
if (numberOfGetPrototypeOfCalls != 10000) {
    throw "Error: did not call getPrototypeOf() the right number of times";
}
var globalO = { f: 42 };
var didCallGetter = false;
function f57() {
    delete globalO?.f;
    function f60() {
        didCallGetter = true;
        return 43;
    }
    try { globalO.__defineGetter__("f", f60); } catch (e) {}
}
doBadThings = f57;
let v64;
try { v64 = new Bar(); } catch (e) {}
const v66 = { f: 0 };
let v67;
try { v67 = foo(globalO, v64, v66); } catch (e) {}
var result = v67;
if (result != 85) {
    throw "Error: bad result at end: " + result;
}
if (!didCallGetter) {
    throw "Error: did not call getter";
}
if (numberOfGetPrototypeOfCalls != 10001) {
    throw "Error: did not call getPrototypeOf() the right number of times at end";
}
