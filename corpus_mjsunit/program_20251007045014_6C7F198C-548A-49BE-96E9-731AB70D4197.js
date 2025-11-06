function foo(a1) {
    return "foo" + a1;
}
var result;
for (let i7 = 0; i7 < 1000000; ++i7) {
    result = foo("hello");
}
if (result != "foohello") {
    throw "Error: bad result: " + result;
}
