var dojo = {};
{
    function dj_undef() {
    }
    function f3() {
        dj_undef();
    }
    dojo.evalProps = f3;
}
dojo.evalProps();
function foo0(a7) {
    var level_1_identifier_1 = "level1";
    level_1_identifier_1 += "level1";
    with ({ level_1_identifier_0: "level2", level_1_identifier_1: "level2" }) {
        level_1_identifier_1 += "level2";
        function foo1(a16) {
            print("foo1");
            a7 += "level3";
            level_1_identifier_1 += "level3";
        }
        foo1("level3");
        print(a7);
        print(level_1_identifier_1);
    }
    print(a7);
    print(level_1_identifier_1);
}
foo0("level1");
function level1Func(a33) {
    with ({ level_1_identifier_0: "level2" }) {
        function level3Func(a37) {
            a33 += "level3";
        }
        level3Func("level3");
        print(a33);
    }
    print(a33);
}
level1Func("level1");
