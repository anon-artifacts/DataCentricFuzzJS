function f0() {
}
let primitives = [10,false,"test",Symbol()];
let key = "key";
for (const v10 of primitives) {
    v10.x = 5;
    v10[key] = 6;
    function f15() {
        'use strict';
        v10.x = 5;
    }
    try { f15(); } catch (e) {}
    function f19() {
        'use strict';
        v10[key] = 6;
    }
    try { f19(); } catch (e) {}
    let target = {};
    Reflect.set(target, key, 5, v10);
    key in target;
}
f0(true, true);
