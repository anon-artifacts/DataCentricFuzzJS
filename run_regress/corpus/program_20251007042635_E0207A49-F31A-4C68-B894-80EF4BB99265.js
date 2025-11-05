function f() {
    var o = {};
    for (let i4 = 0; i4 < 15; i4++) {
        try {
            o.__proto__ = o || i4;
        } catch(e11) {
            continue;
        }
        throw "Fail";
    }
}
f();
