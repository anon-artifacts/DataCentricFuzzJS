function shouldBe(a1, a2) {
}
function shouldThrow(a4, a5) {
    var errorThrown = false;
    var error = null;
    try {
        a4();
    } catch(e11) {
        errorThrown = true;
        error = e11;
    }
}
{
    shouldBe(JSON.stringify(Object.getOwnPropertyNames(Array.prototype.filter).sort()), `["length","name"]`);
    shouldBe(Array.prototype.filter.length, 1);
    shouldBe(JSON.stringify(Object.getOwnPropertyDescriptor(Array.prototype.filter, "length")), `{"value":1,"writable":false,"enumerable":false,"configurable":true}`);
    const t13 = Array.prototype.filter;
    shouldBe(delete t13.length, true);
    shouldBe(JSON.stringify(Object.getOwnPropertyNames(Array.prototype.filter).sort()), `["name"]`);
}
{
    function f47() {
        'use strict';
        const t23 = Array.prototype.forEach;
        t23.length = 42;
    }
    shouldThrow(f47, `TypeError: Attempted to assign to readonly property.`);
}
{
    var resolve = null;
    var reject = null;
    function f59(a60, a61) {
        resolve = a60;
        reject = a61;
    }
    new Promise(f59);
    shouldBe(resolve.length, 1);
    shouldBe(JSON.stringify(Object.getOwnPropertyDescriptor(resolve, "length")), `{"value":1,"writable":false,"enumerable":false,"configurable":true}`);
    shouldBe(reject.length, 1);
    shouldBe(JSON.stringify(Object.getOwnPropertyDescriptor(reject, "length")), `{"value":1,"writable":false,"enumerable":false,"configurable":true}`);
}
