var c = { x: 2, y: 1 };
function h() {
    return 2;
}
function f() {
    for (let i8 = 0; i8 < 100000; i8++) {
        var n = c.x + h();
    }
    var o2 = [{ x: 2.5, y: 1 }];
    return o2;
}
f();
