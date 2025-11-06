function test(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
const v10 = new Function("return this");
var global = v10();
var Cocoa = "Cocoa";
const v16 = { Cocoa: true };
global[Symbol.unscopables] = v16;
test(Cocoa, "Cocoa");
function f21() {
    var Cocoa = "local";
    with (global) {
        test(Cocoa, "local");
    }
}
f21();
