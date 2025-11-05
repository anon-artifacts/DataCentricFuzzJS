try {
    function shouldBe(a1, a2) {
        if (a1 !== a2) {
            const v7 = new Error("bad value: " + a1);
            throw v7;
        }
    }
    Symbol.iterator;
    var iteratorPrototype = ("Cocoa")["Cocoa"]().__proto__.__proto__;
    shouldBe(iteratorPrototype !== Object.prototype, true);
    shouldBe(iteratorPrototype.__proto__, Object.prototype);
    const v25 = JSON.stringify(Object.getOwnPropertyNames(iteratorPrototype));
    try { shouldBe(v25, "[]"); } catch (e) {}
    const v29 = Object.getOwnPropertySymbols(iteratorPrototype).length;
    try { shouldBe(v29, 1); } catch (e) {}
    shouldBe(Object.getOwnPropertySymbols(iteratorPrototype)[0], Symbol.iterator);
    Symbol.iterator;
    shouldBe(iteratorPrototype[iteratorPrototype](), iteratorPrototype);
    Symbol.iterator;
    var stringIterator = ("Hello")["Hello"]();
    Symbol.iterator;
    shouldBe(iteratorPrototype[iteratorPrototype].call(stringIterator), stringIterator);
    function inheritIteratorPrototype(a48) {
        var prototype = a48.__proto__;
        shouldBe(prototype !== iteratorPrototype, true);
        shouldBe(Object.getOwnPropertyDescriptor(prototype, "constructor"), undefined);
        shouldBe(prototype.__proto__, iteratorPrototype);
        Symbol.iterator;
        shouldBe(iteratorPrototype[iteratorPrototype].name, "[Symbol.iterator]");
        shouldBe(iteratorPrototype.hasOwnProperty(Symbol.iterator), true);
    }
    Symbol.iterator;
    inheritIteratorPrototype(("Cappuccino")["Cappuccino"]());
    const v74 = new Map();
    Symbol.iterator;
    inheritIteratorPrototype(v74[v74]());
    const v79 = new Set();
    Symbol.iterator;
    inheritIteratorPrototype(v79[v79]());
    const v84 = new Array();
    Symbol.iterator;
    inheritIteratorPrototype(v84[v84]());
    function f91(a92, a93, a94) {
        return arguments;
    }
    const v96 = f91(0, 1, 2);
    Symbol.iterator;
    inheritIteratorPrototype(v96[v96]());
    function f103(a104, a105, a106) {
        'use strict';
        return arguments;
    }
    const v108 = f103(0, 1, 2);
    Symbol.iterator;
    inheritIteratorPrototype(v108[v108]());
    function testChain(a113) {
        Symbol.iterator;
        var iterator = a113[a113]();
        var proto1 = Object.getPrototypeOf(iterator);
        var proto2 = Object.getPrototypeOf(proto1);
        shouldBe(proto2.hasOwnProperty(Symbol.iterator), true);
        shouldBe(proto1.hasOwnProperty(Symbol.iterator), false);
        shouldBe(iterator.hasOwnProperty(Symbol.iterator), false);
        Symbol.iterator;
        shouldBe(iterator[iterator](), iterator);
    }
    testChain("Cocoa");
    const v138 = new Map();
    testChain(v138);
    const v140 = new Set();
    testChain(v140);
    const v142 = new Array();
    testChain(v142);
} catch(e144) {
}
