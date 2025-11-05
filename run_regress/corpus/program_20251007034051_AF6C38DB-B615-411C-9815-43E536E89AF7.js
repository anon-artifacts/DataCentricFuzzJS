function getStrictF() {
    'use strict';
    function f() {
    }
    return f;
}
function getSloppyF() {
    function f() {
    }
    return f;
}
function test(a5) {
    a5(getStrictF());
    a5(getSloppyF());
}
function testDescriptor(a11) {
    var descr = Object.getOwnPropertyDescriptor(a11, "name");
    descr.configurable;
    descr.enumerable;
    descr.value;
    descr.writable;
}
test(testDescriptor);
function testSet(a23) {
    a23.name = "g";
    a23.name;
}
test(testSet);
function testSetStrict(a29) {
    'use strict';
    function f30() {
        a29.name = "g";
    }
    try { f30(); } catch (e) {}
}
test(testSetStrict);
function testReconfigureAsDataProperty(a36) {
    Object.defineProperty(a36, "name", { value: "g" });
    a36.name;
    Object.defineProperty(a36, "name", { writable: true });
    a36.name = "h";
    a36.name;
    a36.name = 42;
    a36.name;
}
test(testReconfigureAsDataProperty);
function testReconfigureAsAccessorProperty(a56) {
    var name = "g";
    function f60() {
        return name;
    }
    function f61(a62) {
        name = a62;
    }
    Object.defineProperty(a56, "name", { get: f60, set: f61 });
    a56.name;
    a56.name = "h";
    a56.name;
}
test(testReconfigureAsAccessorProperty);
function testFunctionToString(a73) {
    function f75() {
    }
    const v76 = { toString: f75 };
    Object.defineProperty(a73, "name", { value: v76 });
    a73.toString();
}
test(testFunctionToString);
function testSetOnInstance() {
    Function.prototype.hasOwnProperty("name");
    function f() {
    }
    delete f.name;
    f.name;
    f.name = 42;
    f.name;
    f.hasOwnProperty("name");
    const v97 = Function.prototype;
    Object.defineProperty(v97, "name", { writable: true });
    f.name = 123;
    f.hasOwnProperty("name");
    f.name;
}
testSetOnInstance();
function testDelete() {
    function f() {
    }
    delete f.name;
    f.hasOwnProperty("name");
    f.name;
    const t87 = Function.prototype;
    delete t87.name;
    f.name;
}
testDelete();
