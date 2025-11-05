var pass = true;
function test() {
    function f3() {
    }
    var c = f3;
    function shapeyConstructor() {
        c = "";
        c = "";
        for (const v11 in Array("", ...NaN, "")) {
        }
    }
    try {
        var f = shapeyConstructor();
    } catch(e14) {
    }
    if (typeof c !== "string") {
        print("FAIL: type of is " + typeof c);
        pass = false;
    }
}
test();
test();
test();
pass ? print("PASS") : print("FAIL");
