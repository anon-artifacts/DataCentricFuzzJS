console.log("Tests that using a value predicted boolean after it is converted to an int32 doesn't crash the compiler while causing bad code gen.");
function foo(a4) {
    return [a4 << 1,a4];
}
for (let i9 = 0; i9 < 200; i9++) {
    foo(true);
}
foo(true);
