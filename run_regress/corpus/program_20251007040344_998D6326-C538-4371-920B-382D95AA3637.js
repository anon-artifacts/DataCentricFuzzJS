function f() {
    var res = 0;
    try {
        throw 1;
    } catch(e4) {
        for (let i6 = 0; i6 < 10; i6++) {
            res += 3;
        }
    }
}
f();
