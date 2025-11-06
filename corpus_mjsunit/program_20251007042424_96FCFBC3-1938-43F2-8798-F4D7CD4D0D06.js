let v2 = new BigUint64Array(220);
new Int32Array(727);
new Int8Array(2707);
new WeakSet();
new Uint8ClampedArray(8);
new Int8Array(127);
function x() {
}
function f24() {
    return arguments;
}
var args = f24(1, 2, 3, 4, 5);
var array = [args,[127,2,3]];
var result = 0;
for (let i36 = 0; i36 < 1000000; ++i36) {
    result += array[i36 % array.length].length;
}
new Float64Array(1024);
function test() {
    var set = [];
    const v52 = {};
    var f = Symbol();
    var p = { [f]: 1 };
    var n = 1000000;
    for (let i62 = 0; i62 < n; ++i62) {
        v2[f] = i62;
        var tmp = v2;
        v2 = p;
        p = tmp;
    }
    function f68(a69, a70, a71) {
        set.push(a70);
        a69[a70] = a71;
        return true;
    }
    const v75 = new Proxy(v52, { set: f68, get: f24 });
    var p = v75;
    function f77() {
        return p;
    }
    Array.of.call(f77, 1, 2, 3);
    return (set + "") === "length";
}
if (!test()) {
    const v92 = new Error();
    throw v92;
}
