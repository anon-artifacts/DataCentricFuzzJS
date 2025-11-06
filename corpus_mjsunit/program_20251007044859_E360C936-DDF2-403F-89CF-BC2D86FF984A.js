function assert(a1) {
}
function foo(a3) {
    let o;
    if (a3) {
        o = {};
    } else {
        function f7() {
        }
        o = f7;
    }
    return typeof o;
}
try { noInline(foo); } catch (e) {}
for (let i12 = 0; i12 < 10000; i12++) {
    let bool = !(!(i12 % 2));
    let v23;
    try { v23 = foo(bool); } catch (e) {}
    let result = v23;
    if (bool) {
        result === "object";
    } else {
        result === "function";
    }
}
