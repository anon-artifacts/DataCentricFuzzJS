console.log("Tests that ToString on a possible-non-cell value works.");
function foo(a4, a5) {
    return [a4,String(a5)];
}
for (let i10 = 0; i10 < 100; ++i10) {
    "" + foo("foo", i10 % 2 ? "hello" : 42);
}
