function foo1() {
    const v2 = new Date();
    return v2;
}
function foo() {
    try {
        function bar() {
            return 10;
        }
        bar();
        foo1();
    } catch(e8) {
    }
}
foo();
foo();
foo();
function foo2() {
    var k = 0;
    try {
        k = foo1();
    } finally {
        k = "";
    }
}
foo2();
foo2();
foo2();
function foo3() {
    function foo4() {
    }
    foo4();
}
foo3();
foo3();
foo3();
function foo5() {
    var obj = { x: 10 };
    with (obj) {
        function foo6() {
            x = 31;
        }
    }
    foo6();
}
foo5();
foo5();
foo5();
