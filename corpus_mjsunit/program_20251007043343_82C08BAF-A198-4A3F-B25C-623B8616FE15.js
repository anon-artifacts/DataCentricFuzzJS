function testValue() {
    function f(a2, a3) {
        return a2[a3];
    }
    var a = [1,,null,Math,2.1,""];
    for (let i14 = 0; i14 < 50; i14++) {
        f(a, 0);
        f(a, 1);
        f(a, 2);
        f(a, 3);
        f(a, 4);
        f(a, 5);
        f(a, -1);
        f(a, 6);
    }
}
testValue();
function testOutOfBounds() {
    function f(a47, a48) {
        return a47[a48];
    }
    var a = [0,1,2,3,4];
    for (let i58 = 0; i58 < 4; i58++) {
        for (let i65 = 0; i65 < 5; i65++) {
            f(a, i65);
        }
        for (let i73 = 5; i73 < 10; i73++) {
            f(a, i73);
        }
        for (let i83 = -1; i83 > -10; i83--) {
            f(a, i83);
        }
    }
}
testOutOfBounds();
function testHole() {
    function f(a95, a96) {
        return a95[a96];
    }
    var a = [0,,2];
    for (let i104 = 0; i104 < 70; i104++) {
        f(a, 0);
        f(a, 1);
        f(a, 2);
        f(a, 3);
    }
}
testHole();
function testClassGuard() {
    function f(a125) {
        return a125[2];
    }
    var a = [1,2,3,4];
    for (let i134 = 0; i134 < 90; i134++) {
        f(a);
    }
    var b = { 2: 100 };
    f(b);
}
testClassGuard();
function testGeneric1() {
    function f(a150, a151) {
        return a150[a151];
    }
    for (let i154 = 0; i154 < 100; i154++) {
        f("abc", 1);
        f("foo", "length");
        f([], -1);
        f({ x: 1 }, "x");
    }
}
testGeneric1();
