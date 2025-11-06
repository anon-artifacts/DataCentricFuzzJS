function foo(a1) {
    return a1.f;
}
var o = { f: 42 };
var result = 0;
for (let i9 = 0; i9 < 500; ++i9) {
    for (let i16 = 0; i16 < 10000; ++i16) {
        result += foo(o);
    }
    if (o.g) {
        o = { f: 42 };
    } else {
        o.g = 43;
    }
}
if (result != 210000000) {
    throw "Bad result: " + result;
}
