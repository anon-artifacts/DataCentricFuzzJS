const v2 = new Int16Array(100);
var A = v2;
var str = "123.12";
function FAIL(a7, a8) {
    print("FAILED\n");
    print(((("Expected " + a8) + ", got ") + a7) + "\n");
    throw "FAILED";
}
function foo() {
    var y = 0;
    for (let i25 = 0; i25 < 100; i25 += 4) {
        A[i25] = i25;
        const v32 = i25 + 32762;
        A[i25 + 1] = v32;
        const v36 = i25 + 0.34;
        A[i25 + 2] = v36;
        A[i25 + 3] = str;
    }
    for (let i42 = 0; i42 < 100; i42++) {
        y += A[i42];
        A[i42] = 0;
    }
    return y;
}
var expected = -681603;
var r;
for (let i56 = 0; i56 < 1000; i56++) {
    if ((r = foo()) !== expected) {
        FAIL(r, expected);
    }
}
print("Passed\n");
