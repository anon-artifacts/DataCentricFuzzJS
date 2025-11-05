function foo(a1) {
    var result = 0;
    for (let i5 = 0; i5 < a1.length; ++i5) {
        result += a1.charCodeAt(i5);
    }
    return result;
}
for (let i13 = 0; i13 < 1000000; ++i13) {
    var result = foo("hello");
    if (result != 532) {
        throw "Error: bad result: " + result;
    }
}
