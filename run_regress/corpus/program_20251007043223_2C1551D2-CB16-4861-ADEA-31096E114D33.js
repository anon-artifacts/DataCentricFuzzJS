function f0() {
    var x;
    for (let i4 = 0; i4 < 1; i4 = i4 + 1) {
        function f11() {
            return i4;
        }
        x = f11;
    }
    x();
}
f0();
