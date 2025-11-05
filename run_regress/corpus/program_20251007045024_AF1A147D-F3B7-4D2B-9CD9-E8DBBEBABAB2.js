function test() {
    const v2 = new Map();
    var iterator = v2[Symbol.iterator]();
    var proto1 = Object.getPrototypeOf(iterator);
    var proto2 = Object.getPrototypeOf(proto1);
    return ((proto2.hasOwnProperty(Symbol.iterator) && !proto1.hasOwnProperty(Symbol.iterator)) && !iterator.hasOwnProperty(Symbol.iterator)) && (iterator[Symbol.iterator]() === iterator);
}
if (!test()) {
    const v30 = new Error("Test failed");
    throw v30;
}
