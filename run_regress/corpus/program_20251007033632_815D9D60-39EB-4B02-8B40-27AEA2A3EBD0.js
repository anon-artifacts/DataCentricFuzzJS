console.log("This tests that Symbol.prototype object is ordinary object (not Symbol wrapper object).");
try {
    const v4 = Symbol.prototype;
    Symbol.prototype.toString.call(v4);
} catch(e8) {
}
const v10 = Symbol.iterator;
Symbol.prototype.toString.call(v10);
successfullyParsed = true;
