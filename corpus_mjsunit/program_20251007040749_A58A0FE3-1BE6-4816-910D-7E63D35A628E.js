console.log("Tests that CSE doesn't try to match against a dead GetScopedVar.");
function foo(a4) {
    var x = a4;
    function f6(a7) {
        if (a7) {
            var tmp = x;
            return x;
        }
        return 42;
    }
    return f6;
}
for (let i11 = 0; i11 < 200; i11++) {
    const t13 = foo(i11);
    t13(false);
}
const t16 = foo(0);
t16(false);
