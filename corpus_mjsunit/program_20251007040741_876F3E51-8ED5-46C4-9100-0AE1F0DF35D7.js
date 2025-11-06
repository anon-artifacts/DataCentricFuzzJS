function shouldBe(a1, a2) {
}
function shouldThrow(a4, a5) {
    var errorThrown = false;
    var error = null;
    try {
        a4();
    } catch(e11) {
    }
}
{
    shouldBe(JSON.stringify(Object.getOwnPropertyNames(Array.prototype.filter).sort()), `["length","name"]`);
    shouldBe(Array.prototype.filter.name, "filter");
    shouldBe(JSON.stringify(Object.getOwnPropertyDescriptor(Array.prototype.filter, "name")), `{"value":"filter","writable":false,"enumerable":false,"configurable":true}`);
    const t11 = Array.prototype.filter;
    shouldBe(delete t11.name, true);
    shouldBe(JSON.stringify(Object.getOwnPropertyNames(Array.prototype.filter).sort()), `["length"]`);
}
{
    function f46() {
        'use strict';
        const t21 = Array.prototype.forEach;
        t21.name = 42;
    }
    shouldThrow(f46, `TypeError: Attempted to assign to readonly property.`);
}
{
    var resolve = null;
    var reject = null;
    function f58(a59, a60) {
        resolve = a59;
        reject = a60;
    }
    new Promise(f58);
    shouldBe(Object.getOwnPropertyDescriptor(resolve, "name"), undefined);
    shouldBe(Object.getOwnPropertyDescriptor(reject, "name"), undefined);
}
