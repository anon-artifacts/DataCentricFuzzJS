function foo(a1, a2) {
    return a1 === a2;
}
function bar(a5, a6) {
    return a6 === a5;
}
function test(a9, a10, a11) {
    var fooActual = foo(a9, a10);
    var barActual = bar(a9, a10);
    if (fooActual != a11) {
        const v20 = new Error("Bad result: " + fooActual);
        throw v20;
    }
    if (barActual != a11) {
        const v25 = new Error("Bad result: " + barActual);
        throw v25;
    }
}
for (let i27 = 0; i27 < 10000; ++i27) {
    test("foo", "foo", true);
    test("foo", "bar", false);
    test("fuz", 42, false);
    test("buz", {}, false);
    test("bla", null, false);
}
var fooString = "";
fooString += "f";
for (let i57 = 0; i57 < 2; ++i57) {
    fooString += "o";
}
test(fooString, "foo", true);
