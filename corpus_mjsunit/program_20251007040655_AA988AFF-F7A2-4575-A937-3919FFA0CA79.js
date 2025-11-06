function write(a1) {
    print(a1 + "");
}
function test1() {
    var obj = {};
    var x = "test1_value";
    function foo() {
        return x;
    }
    with (obj) {
        write(foo());
    }
}
test1();
function test2() {
    var obj = {};
    function foo() {
        return "test2_value";
    }
    var o1 = { f: foo };
    with (obj) {
        write(o1.f());
    }
}
test2();
function test3_helper() {
    return "test3_helper";
}
function test3() {
    var o = {};
    with (o) {
        var g = test3_helper;
        var x = g();
        write(x);
    }
}
test3();
var test4_obj = { prop4: "Feb20" };
with (test4_obj) {
    function f40() {
        function f42() {
            return prop4;
        }
        return f42();
    }
    write("test4_obj.prop4 = " + f40());
}
var test5_obj = {};
with (test5_obj) {
    function f50(a51) {
        write(helper5);
        function f54(a55, a56) {
            write("func5_inner " + a51);
            write(helper5);
        }
        var func5_inner = f54;
        func5_inner();
    }
    test5_obj.func5 = f50;
    function helper_5(a64, a65) {
        write("in pair entry");
    }
    test5_obj.helper5 = helper_5;
}
var result5 = test5_obj.func5(100);
write(result5);
var test6_result = "global test6_result";
function test6() {
    function test6_inner() {
        return this.test6_result;
    }
    with ({}) {
        write(test6_inner());
    }
}
test6();
