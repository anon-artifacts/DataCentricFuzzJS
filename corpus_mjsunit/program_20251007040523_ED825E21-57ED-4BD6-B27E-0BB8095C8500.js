function f(a1, a2, a3) {
    a1[a2] = a3;
}
f("make it generic", 0, 0);
function TestIsConcatSpreadableProtector() {
    var o = { length: 1, 0: 99 };
    f(o, Symbol.isConcatSpreadable, true);
    [99];
    ([]).concat(o);
}
TestIsConcatSpreadableProtector();
function TestSpeciesProtector() {
    function MyArray() {
    }
    f(Array.prototype, "constructor", MyArray);
}
TestSpeciesProtector();
