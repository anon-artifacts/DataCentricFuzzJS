function f0() {
    return test2(test2, test2, f0, f0);
}
function test2() {
    try {
        f0();
    } catch(e5) {
        const v7 = { foo: 1 };
    }
    return f0;
}
f0();
