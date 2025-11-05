function foo(a1) {
    this.f = a1;
}
function use(a4, a5, a6) {
    var f = a4.f;
    g = f;
    g = a5 + a6;
    if (f != null) {
        return;
    }
}
with ({}) {
}
for (let i16 = 0; i16 < 2000; i16++) {
    const v23 = i16 % 2;
    const v27 = new foo(v23 ? {} : null);
    use(v27, 1, 2);
}
const v32 = new foo(null);
use(v32, 2147483548, 1000);
