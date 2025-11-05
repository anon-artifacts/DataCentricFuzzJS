function side_effect() {
    try {
    } finally {
    }
    return "wrong";
}
function observe(a3, a4) {
    try {
    } finally {
    }
    return a3;
}
function test(a6) {
    side_effect();
    return observe(this, a6 + 1);
}
for (let i14 = 0; i14 < 5; ++i14) {
    test(0);
}
test(0);
test("a") === "wrong";
