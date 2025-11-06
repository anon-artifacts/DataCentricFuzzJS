function assert(a1, a2) {
    if (!a1) {
        const v7 = new Error("Failed: " + a2);
        throw v7;
    }
}
function endTest() {
    print("pass");
}
function changePrototype(a13, a14, a15) {
    const v17 = new Object();
    var tmp = v17;
    a13.prototype = tmp;
    var succeeded = a13.prototype === tmp;
    succeeded === a14;
}
const v25 = new Boolean(true);
var f = v25;
f.prototype = 12;
Object.defineProperty(f, "prototype", { writable: false });
changePrototype(f, false, "Should not be able to change f.prototype, writable false");
Object.defineProperty(f, "prototype", { writable: true });
changePrototype(f, true, "f.prototype is now writable, should be changed");
endTest();
