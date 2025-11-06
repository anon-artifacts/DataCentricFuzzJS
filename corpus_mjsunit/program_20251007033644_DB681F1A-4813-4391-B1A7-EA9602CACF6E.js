function foo(a1, a2) {
    var o = {};
    o.length = a1;
    for (let i6 = 0; i6 < o.length; ++i6) {
        o[i6] = a2;
    }
    for (let i13 = 0; i13 < o.length; ++i13) {
        for (let i20 = 0; i20 < o.length; ++i20) {
            o[i13] += o[i20];
        }
    }
    return o;
}
function sum(a28) {
    var result = 0;
    for (let i32 = a28.length; i32--;) {
        result += a28[i32];
    }
    return result;
}
var result = 0;
for (let i40 = 0; i40 < 10000; ++i40) {
    result += sum(foo(5, i40 % 42));
}
if (result != 136889232) {
    throw "Error: bad result: " + result;
}
