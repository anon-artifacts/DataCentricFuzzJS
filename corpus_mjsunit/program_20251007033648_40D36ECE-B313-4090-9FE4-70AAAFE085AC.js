const v2 = new Uint16Array(2);
var U16 = v2;
U16[0] = 65535;
function foo(a6, a7) {
    return U16[0] === 65535;
}
foo();
foo();
foo();
