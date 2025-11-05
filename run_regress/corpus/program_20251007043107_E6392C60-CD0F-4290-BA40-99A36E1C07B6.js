function foo(a1) {
    return ("foo" + a1) + "bar";
}
var result;
for (let i9 = 0; i9 < 1000000; ++i9) {
    result = foo("hello");
}
if (result != "foohellobar") {
    throw "Error: bad result: " + result;
}
