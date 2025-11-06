console.log("Tests that we do ToString conversions correctly when String.prototype.valueOf is not what we wanted.");
function f3() {
    return 42;
}
const t4 = String.prototype;
t4.toString = f3;
function foo(a8) {
    for (let i10 = 0; i10 < 100; ++i10) {
        const v16 = new String(a8);
        a8 = v16;
    }
    return a8;
}
for (let i18 = 0; i18 < 100; ++i18) {
    "" + foo("hello");
}
