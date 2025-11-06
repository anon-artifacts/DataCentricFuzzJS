function f0() {
    const v2 = new Object();
    var obj0 = v2;
    for (let i5 = 0; i5 < 3; ++i5) {
    }
    for (let i12 = 0; i12 < 3; ++i12) {
        obj0.a = 1;
    }
    function func8() {
    }
    obj0.a | 0;
}
f0();
function f24() {
    var e = 1;
    function f27() {
        e = -1;
    }
    var func1 = f27;
    while (e-- > 0) {
        func1();
    }
    return e;
}
print(f24());
