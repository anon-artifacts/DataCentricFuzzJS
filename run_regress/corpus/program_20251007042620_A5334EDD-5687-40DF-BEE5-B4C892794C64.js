function foo(a1) {
    const v4 = new String(a1);
    return ("foo" + v4) + "bar";
}
var result;
for (let i11 = 0; i11 < 100000; ++i11) {
    result = foo("hello");
}
if (result != "foohellobar") {
    throw "Error: bad result: " + result;
}
