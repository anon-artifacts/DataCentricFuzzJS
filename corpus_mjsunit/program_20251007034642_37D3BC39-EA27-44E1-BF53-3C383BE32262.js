var result = 0;
function func() {
    function C() {
        function f4() {
            result ^= ((result * 3) + 5) + (result << 3);
        }
        this.m = f4;
    }
    var a = [];
    for (let i16 = 0; i16 < 10000; i16++) {
        const v22 = new C();
        a[i16] = v22;
    }
    const t13 = a[9000];
    t13.m = 0.876555555;
    for (let i26 = 0; i26 < 10000; i26++) {
        a[i26].m();
    }
}
try {
    func();
} catch(e35) {
}
if (result != 1561806289) {
    throw "Expected 1561806289 but got " + result;
}
