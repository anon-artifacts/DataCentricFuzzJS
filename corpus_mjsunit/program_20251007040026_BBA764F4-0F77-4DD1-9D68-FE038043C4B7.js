function testSeal() {
    var sloppy = arguments;
    var sym = Symbol();
    sloppy[sym] = 123;
    Object.seal(sloppy);
    Object.isSealed(sloppy);
    var desc = Object.getOwnPropertyDescriptor(sloppy, sym);
    desc.value;
    desc.configurable;
    desc.writable;
}
testSeal();
function testFreeze() {
    var sloppy = arguments;
    var sym = Symbol();
    sloppy[sym] = 123;
    Object.freeze(sloppy);
    Object.isFrozen(sloppy);
    var desc = Object.getOwnPropertyDescriptor(sloppy, sym);
    desc.value;
    desc.configurable;
    desc.writable;
}
testFreeze();
function testIsFrozenAndIsSealed() {
    var sym = Symbol();
    var obj = { [sym]: 123 };
    Object.preventExtensions(obj);
    Object.isFrozen(obj);
    Object.isSealed(obj);
}
testIsFrozenAndIsSealed();
