console.log("Tests what happens when you multiply a big unknown integer with a small known integer and detect that we have had an overflow.");
function foo(a4) {
    return a4 * 65536;
}
for (let i8 = 0; i8 < 1000; ++i8) {
    foo(2147483647);
}
