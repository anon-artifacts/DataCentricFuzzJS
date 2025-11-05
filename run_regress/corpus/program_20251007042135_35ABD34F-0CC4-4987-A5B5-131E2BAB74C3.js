let threw = false;
try {
    var obj1 = {};
    function f4() {
        for (const v6 in Object) {
            const v7 = {};
            const t6 = Object.prototype;
            t6[v6] = v7;
        }
    }
    var func0 = f4;
    let cnt = 0;
    function f13() {
        print("BAD!");
    }
    Object.defineProperty(obj1, "prop0", { get: f13, configurable: true });
    const v21 = func0();
    const t17 = Object.prototype;
    t17.prop0 = v21;
    const v23 = func0();
    const t20 = Object.prototype;
    t20.prop2 = v23;
    const v25 = Object.prototype;
    function f27() {
    }
    Object.prop2 = Object.defineProperty(v25, "prop2", { get: f27 });
    function f30() {
        'use strict';
        for (const v31 in Object) {
            const v32 = func0();
            const t30 = Object.prototype;
            t30[v31] = v32;
        }
    }
    f30();
} catch(e35) {
    threw = true;
}
console.log(threw ? "Pass" : "Fail");
