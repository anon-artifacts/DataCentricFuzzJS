console.log("Tests that the DFG's interference analysis knows that a holy PutByVal interferes with a GetArrayLength.");
function foo(a4) {
    var x = a4.length;
    a4[1] = 42;
    return [x,a4.length];
}
for (let i11 = 0; i11 < 100; ++i11) {
    foo([75]);
}
