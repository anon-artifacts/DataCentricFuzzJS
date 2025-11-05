function f(a1) {
    function* g() {
        function f3() {
            return a1;
        }
        yield f3;
    }
    if (a1 == 8) {
        return g();
    }
    a1 = 3;
}
var x;
for (let i12 = 0; i12 < 9; i12++) {
    x = f(i12);
}
x.next().value();
