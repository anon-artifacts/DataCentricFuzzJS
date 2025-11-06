console.log("Tests what happens when you multiply a big unknown integer with a small known integer and use the result in a bitop.");
function foo(a4) {
    return (a4 * 65536) | 0;
}
for (let i10 = 0; i10 < 100; ++i10) {
    foo(2147483647);
}
