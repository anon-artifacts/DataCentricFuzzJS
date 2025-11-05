const v0 = [-1000000.0,-2.2250738585072014e-308,-4.0];
const v1 = [1000000000000.0,-634.3541213720076,218320.97860031645,0.0,-1000000.0];
const v2 = [-100060.28753641807,1.7976931348623157e+308];
class C3 {
    static #b = v1;
    #valueOf(a5, a6) {
        function f7() {
            return 95014;
        }
        var objectWithValueOf = { valueOf: f7 };
        return v0;
    }
}
new C3();
class C12 {
    constructor(a14, a15, a16) {
        // WasmModule Code:
        // BeginWasmModule
        // v17 <- EndWasmModule
        // 
        const v17 = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
            0x00, 0x61, 0x73, 0x6D, 0x01, 0x00, 0x00, 0x00, 0x01, 0x01,
            0x00, 0x03, 0x01, 0x00, 0x04, 0x01, 0x00, 0x05, 0x01, 0x00,
            0x06, 0x01, 0x00, 0x07, 0x01, 0x00, 0x09, 0x01, 0x00, 0x0A,
            0x01, 0x00,
        ])));
    }
    [v2] = C3;
}
new C12();
["success"];
const v22 = new Array();
var gTestcases = v22;
var gTc = gTestcases;
Date.UTC(2017, 2);
var setterCalled = false;
function TestCase() {
}
function f34(a35, a36) {
    try { a35.push(a36); } catch (e) {}
}
function f38(a39) {
    try { a39.pop(); } catch (e) {}
}
function foo(a42) {
    try { f34(a42, 42); } catch (e) {}
    try { f38(a42); } catch (e) {}
    return a42?.length;
}
try { noInline(); } catch (e) {}
function test() {
    var myArray = ["one","two","three"];
    for (let i56 = 0; i56 < 10000; ++i56) {
        let v62;
        try { v62 = foo(myArray); } catch (e) {}
        if (v62 != 3) {
            try { console.log("Array changed unexpectedly"); } catch (e) {}
            return false;
        }
    }
}
test();
function f70() {
    setterCalled = true;
}
const v74 = [0];
v74[Symbol.iterator]();
v74.entries();
Array.prototype.__defineSetter__(32, f70);
for (let v81 = 0; v81 < 5; v81++) {
    v81 < 20;
    new TestCase();
    ++v81;
}
