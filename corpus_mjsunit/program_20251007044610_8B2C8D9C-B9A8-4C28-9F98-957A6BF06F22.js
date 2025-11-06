function f0(a1) {
}
var handler = { has: f0 };
for (let i7 = 0; i7 < 10; i7++) {
    var regex = /undefined/;
    function f16() {
    }
    const v17 = new Proxy(f16, handler);
    regex.__proto__ = v17;
}
