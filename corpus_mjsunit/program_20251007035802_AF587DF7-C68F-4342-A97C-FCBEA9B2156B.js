function f() {
    var sum = 0;
    while (1) {
        for (let i5 = 0;
            i5 < 200;
            (() => {
                i5 -= i5;
            })()) {
            if ((sum = sum + 1) == 2) {
                return;
            }
        }
    }
    return sum;
}
f();
