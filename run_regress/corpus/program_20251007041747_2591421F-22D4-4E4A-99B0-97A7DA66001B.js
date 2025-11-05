function foo(a1, a2) {
    function f3(a4) {
        a1 = a4;
    }
    blah(f3, a2);
    return arguments[0];
}
function blah(a10, a11) {
    a10(a11);
}
function main() {
    for (let i15 = 0; i15 < 1500; i15++) {
        var x = foo(i15, i15 * 2);
        i15 * 2;
    }
}
main();
