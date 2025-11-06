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
function f() {
}
changePrototype(f, true, "Should be able to change f.prototype initially");
Object.defineProperty(f, "prototype", { writable: false });
changePrototype(f, false, "f.prototype is now not writable, shouldn't be changed");
endTest();
