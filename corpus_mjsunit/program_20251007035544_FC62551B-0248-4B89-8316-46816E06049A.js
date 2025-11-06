function test(a1) {
    var total = 0;
    for (let i5 = 0; i5 < 100; i5++) {
        var j = 1;
        var b = a1.a;
        if (b) {
            j += b.test;
        }
        total += j;
    }
    print(total);
}
const v19 = { test: 1 };
var a1 = { a: v19 };
var a2 = { a: undefined };
test(a1);
test(a2);
test(a1);
test(a2);
