console.log("This tests that a structure clobber in a basic block that does not touch a live variable causes that variable's structure to be correctly clobbered.");
var clobberedObject;
function bar() {
    if (!clobberedObject) {
        return;
    }
    delete clobberedObject.f;
    clobberedObject.g = 42;
}
function foo(a10, a11) {
    var o = a11.f;
    var x = o.f;
    if (a10) {
        bar();
    }
    return x + o.f;
}
var expected = 2;
for (let i22 = 0; i22 < 200; ++i22) {
    var object = { f: 1 };
    var predicate = true;
    if (i22 >= 150) {
        clobberedObject = object;
        expected = 0 / 0;
    }
    foo(predicate, { f: object });
}
