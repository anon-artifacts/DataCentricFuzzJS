var arg = "arg";
var iter = 100;
function foo1(a5) {
    var string = (("that: " + this.that1) + ", arg: ") + a5;
    return string;
}
function foo2(a15) {
    var string = (("that: " + this.that2) + ", arg: ") + a15;
    return string;
}
function foo3(a25) {
    var string = (("that: " + this.that3) + ", arg: ") + a25;
    return string;
}
function foo4(a35) {
    var string = (("that: " + this.that4) + ", arg: ") + a35;
    return string;
}
function foo5(a45) {
    var string = (("that: " + this.that5) + ", arg: ") + a45;
    return string;
}
function Test1() {
    var o1 = { foo: foo1, that1: "that1" };
    var o2 = { foo: foo2, that2: "that2" };
    var o3 = { foo: foo3, that3: "that3" };
    var o4 = { foo: foo4, that4: "that4" };
    var o5 = { foo: foo5, that5: "that5" };
    function test(a71) {
        a71.foo(arg += "foo");
    }
    test(o1);
    test(o2);
    test(o3);
    test(o4);
    for (let i79 = 0; i79 < iter; i79++) {
        result = test(o5);
    }
}
Test1();
