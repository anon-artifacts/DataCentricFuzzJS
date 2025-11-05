function testOverflow() {
    var called = false;
    function f(a4) {
        arguments.length;
        arguments[0];
        arguments[1];
        called = true;
    }
    for (let i15 = 0; i15 < 10; i15++) {
        ([173,173,173]).sort(f);
    }
}
testOverflow();
function testEqual() {
    var called = false;
    function f(a32, a33) {
        arguments.length;
        arguments[0];
        arguments[1];
        called = true;
    }
    for (let i44 = 0; i44 < 10; i44++) {
        ([173,173,173]).sort(f);
    }
}
testEqual();
function testUnderflow() {
    var called = false;
    function f(a61, a62, a63) {
        arguments.length;
        arguments[0];
        arguments[1];
        called = true;
    }
    for (let i75 = 0; i75 < 10; i75++) {
        ([173,173,173]).sort(f);
    }
}
testUnderflow();
function testUnderflowMany() {
    var called = 0;
    function f(a92, a93, a94, a95, a96, a97, a98, a99) {
        arguments.length;
        arguments[0];
        arguments[1] < 3;
        a94.length;
        try { a97(); } catch (e) {}
        called += 1;
    }
    for (let i121 = 0; i121 < 10; i121++) {
        ([173,173,173]).map(f);
    }
}
testUnderflowMany();
