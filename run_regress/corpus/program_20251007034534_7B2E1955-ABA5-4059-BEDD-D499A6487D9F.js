function f(a1, a2, a3) {
    var called = false;
    var keys = [];
    for (const v8 in a1) {
        keys.push(v8);
        if (!called) {
            called = true;
            Reflect.apply(a2, a1, a3);
        }
    }
    return keys;
}
f([1,,3], Array.prototype.unshift, [0]);
["0"];
f([1,,3], Array.prototype.splice, [0,0,0]);
["0"];
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
