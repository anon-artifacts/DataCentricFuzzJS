function test0(a1) {
    with (a1) {
        function handlerFactory() {
            function f3() {
                return "4";
            }
            return { test: f3 };
        }
        z = handlerFactory;
        function handlerFactory2() {
            function a() {
                return "5";
            }
            return { test: a };
        }
        z2 = handlerFactory2;
    }
    var handlerFactory = handlerFactory || undefined;
    var handlerFactory2 = handlerFactory2 || undefined;
    return { x: a1, handlerFactory: handlerFactory, handlerFactory2: handlerFactory2 };
}
var p = { o: 1, z: 2, z2: 3 };
print("p = " + JSON.stringify(p));
var testOut = test0(p);
var k = testOut.x;
print("k = " + JSON.stringify(k));
print("k.z = " + k.z);
print("k.z() = " + k.z());
print("k.z().test() = " + JSON.stringify(k.z().test()));
print("k.z().test()+1 = " + JSON.stringify(k.z().test() + 1));
print();
print("sibling with block");
print("k.z2 = " + k.z2);
print("k.z2() = " + k.z2());
print("k.z2().test() = " + JSON.stringify(k.z2().test()));
print("k.z2().test()+1 = " + JSON.stringify(k.z2().test() + 1));
print();
print("compat mode specifics as !== undefined (if present) - version:2 specifics");
if (testOut.handlerFactory !== undefined) {
    print(("testOut.handlerFactory().test() = " + JSON.stringify(testOut.handlerFactory().test())) + " (as json)");
    print(("testOut.handlerFactory().test()+1 = " + testOut.handlerFactory().test()) + 1);
}
if (testOut.handlerFactory2 !== undefined) {
    print(("testOut.handlerFactory2().test() = " + JSON.stringify(testOut.handlerFactory2().test())) + " (as json)");
    print(("testOut.handlerFactory2().test()+1 = " + testOut.handlerFactory2().test()) + 1);
}
