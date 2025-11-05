console.log("Tests that Arraify does good things when Object.preventExtensions() has been called.");
function foo(a4) {
    a4[0] = 42;
    return a4[0];
}
var o = {};
Object.preventExtensions(o);
for (let i12 = 0; i12 < 200; i12++) {
    foo(o);
}
foo(o);
