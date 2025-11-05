function shouldBe(a1, a2) {
}
var called = false;
const v6 = Symbol.prototype;
const v7 = Symbol.iterator;
const v14 = {
    get() {
        'use strict';
        shouldBe(typeof this, "symbol");
        called = true;
        return null;
    },
};
Object.defineProperty(v6, v7, v14);
var symbol = Symbol("Cocoa");
{
    called = false;
    Array.from(symbol);
    shouldBe(called, true);
}
{
    called = false;
    Uint8Array.from(symbol);
    shouldBe(called, true);
}
