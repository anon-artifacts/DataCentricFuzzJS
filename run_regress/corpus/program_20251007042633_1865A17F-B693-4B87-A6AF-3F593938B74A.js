function test1() {
    const v1 = {};
    print(/A/.exec(v1));
}
function test2() {
    print(("").match({}));
}
function test2() {
    print(("").indexOf({}));
}
function test3() {
    print(("").match());
}
function test4() {
    print(("a").match(/a/g));
}
function test5() {
    print(("A").replace("C", {}));
}
function test6() {
    print(("A").replace("C"));
}
function test7() {
    print(("A").replace());
}
function test8() {
    ("A").replace({}, "C");
}
function test9() {
    print(("ABCDEF").replace({}, "DEF"));
}
function test10() {
    print(("fafafa").replace({}, "X"));
}
function test11() {
    var a = {};
    print(("Aundefined").replace(a.x, Array.isArray));
}
function test12() {
    function f78(a79) {
        return a79 == "Aundefined";
    }
    print(("Aundefined").replace("undefined", f78));
}
function test13() {
    var o = {};
    const v89 = o.x;
    print(/A/.exec(v89));
}
function test14() {
    var strvar7 = "a";
    print(strvar7.replace(1, 1).replace(1, 1));
}
function test15() {
    var o = {};
    print(("").match(o.x));
}
function test16() {
    try {
        print(String.prototype.match.call(null, o));
    } catch(e122) {
        print("expected : " + e122.message);
    }
}
function test17() {
    try {
        const v130 = Array.a;
        print(String.prototype.match.apply(v130, "a"));
    } catch(e138) {
        print("expected : " + e138.message);
    }
}
function test18() {
    try {
        print(String.prototype.match.call("a"));
    } catch(e152) {
        print("expected : " + e152.message);
    }
}
function test19() {
    try {
        var o = {};
        print(String.prototype.replace.call(null, o));
    } catch(e168) {
        print("expected : " + e168.message);
    }
}
function test20() {
    try {
        const v176 = Array.a;
        print(String.prototype.replace.call(v176, "a"));
    } catch(e184) {
        print("expected : " + e184.message);
    }
}
function test21() {
    const v193 = String.foo;
    print(String.prototype.replace.call("a", v193));
}
function test22() {
    try {
        var o = {};
        const v203 = o.x;
        print(RegExp.prototype.exec.call(null, v203));
    } catch(e210) {
        print("expected : " + e210.message);
    }
}
function test23() {
    try {
        const v218 = Array.a;
        print(RegExp.prototype.exec.apply(v218, "a"));
    } catch(e226) {
        print("expected : " + e226.message);
    }
}
function test24() {
    try {
        print(RegExp.prototype.exec.call("a"));
    } catch(e240) {
        print("expected : " + e240.message);
    }
}
test1();
test1();
test2();
test2();
test3();
test3();
test4();
test4();
test5();
test5();
test6();
test6();
test7();
test7();
test8();
test8();
test9();
test9();
test10();
test10();
test11();
test11();
test12();
test12();
test13();
test13();
test14();
test14();
test15();
test15();
test16();
test16();
test17();
test17();
test18();
test18();
test19();
test19();
test20();
test20();
test21();
test21();
test22();
test22();
test23();
test23();
test24();
test24();
function f294(a295) {
    print(a295 instanceof RegExp);
    return [];
}
const t175 = String.prototype;
t175.match = f294;
test2();
function f304(a305) {
    print(a305 instanceof Object);
    return [];
}
const t182 = String.prototype;
t182.replace = f304;
test9();
