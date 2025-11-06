function f0() {
    function f(a2) {
        return String.fromCharCode(a2 >>> 24);
    }
    var e = 1090519041;
    f(e);
    f(e);
}
f0();
function f13() {
    function f(a15) {
        return (a15 >>> 24) & 65535;
    }
    f(1);
    f(1);
    f((100 << 24) + 42);
}
f13();
