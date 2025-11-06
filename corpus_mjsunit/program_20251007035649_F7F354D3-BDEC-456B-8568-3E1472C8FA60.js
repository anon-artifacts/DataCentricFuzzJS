function check(a1) {
    Object.getPrototypeOf(a1);
    Array.prototype;
    Array.isArray(a1);
    a1[9] = 9;
    a1.length;
}
check(Array.of());
check(Array.of(0));
check(Array.of(0, 1, 2));
var f = Array.of;
check(f());
