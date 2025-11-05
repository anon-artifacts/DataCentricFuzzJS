function f(a1) {
    var z = arguments;
    if (false) {
        function f5() {
            ++a1;
        }
        var p = f5;
    }
}
function g() {
    for (let i10 = 0; i10 < 5; ++i10) {
        f(2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
    }
}
g();
