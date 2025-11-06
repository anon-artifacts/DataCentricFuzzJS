function test(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
test(Array.prototype[Symbol.iterator], Array.prototype.values);
test(Map.prototype[Symbol.iterator], Map.prototype.entries);
test(Set.prototype[Symbol.iterator], Set.prototype.values);
function argumentsTests(a31) {
    function f32() {
        return arguments[Symbol.iterator];
    }
    test(f32(), a31);
    function f38(a39, a40, a41) {
        return arguments[Symbol.iterator];
    }
    test(f38(), a31);
    function f47() {
        'use strict';
        return arguments[Symbol.iterator];
    }
    test(f47(), a31);
    function f53(a54, a55, a56) {
        'use strict';
        return arguments[Symbol.iterator];
    }
    test(f53(), a31);
}
argumentsTests(Array.prototype.values);
var arrayValues = Array.prototype.values;
const t31 = Array.prototype;
t31.values = null;
argumentsTests(arrayValues);
