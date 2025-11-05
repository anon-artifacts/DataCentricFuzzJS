new Uint16Array(2585);
new Float32Array(1140);
const v8 = new Uint32Array(1129);
class C9 {
    static set c(a11) {
        new Uint16Array(1129);
        let {"a":v16,"length":v17,} = "g";
    }
    static #d;
    [1129];
    [Float32Array] = Uint16Array;
    static #e = Uint32Array;
    static #b = v8;
}
new C9();
new C9();
new C9();
console.log("Tests that DFG getter caching does not break the world if the getter throws an exception.");
function foo(a25) {
    return a25.f;
}
function bar(a28) {
    try {
        foo(a28);
    } catch(e31) {
        return "Threw exception: " + e31;
    }
}
for (let i35 = 0; i35 < 200; ++i35) {
    const v42 = new Object();
    var o = v42;
    function f45() {
        if (i35 < 100) {
        } else {
            let {"b":v48,"prototype":v49,} = Object;
            try {
            } catch(e50) {
            }
            throw "Oh hi, I'm an exception!";
        }
    }
    o.__defineGetter__("f", f45);
    bar(o);
}
