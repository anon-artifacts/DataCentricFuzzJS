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
function foo(a18, a19) {
    var result = a18?.f;
    var _ = a19 instanceof C0;
    return result + a18?.f;
}
try { noInline(foo); } catch (e) {}
for (let i29 = 0; i29 < 10000; ++i29) {
    const v36 = { f: 42 };
    let v37;
    try { v37 = new Bar(); } catch (e) {}
    let v38;
    try { v38 = foo(v36, v37); } catch (e) {}
    var result = v38;
    if (result != 84) {
        throw "Error: bad result in loop: " + result;
    }
}
var globalO = { f: 42 };
var didCallGetter = false;
function f49() {
    globalO.f = 43;
}
doBadThings = f49;
let v51;
try { v51 = new Bar(); } catch (e) {}
let v52;
try { v52 = foo(globalO, v51); } catch (e) {}
var result = v52;
if (result != 85) {
    throw "Error: bad result at end: " + result;
}
if (numberOfGetPrototypeOfCalls != 10001) {
    throw "Error: did not call getPrototypeOf() the right number of times at end";
}
