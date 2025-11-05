var runningJITtedCode = false;
function test0() {
    function f3() {
        function v1() {
            function v2() {
                return v2;
            }
            if (runningJITtedCode) {
                return v2();
            }
        }
        var v3 = v1();
    }
    var func0 = f3;
    for (let i13 = 4 - 6;;) {
        if (i13 === 4) {
            break;
        }
        i13 += 2;
        func0();
    }
}
test0();
runningJITtedCode = true;
test0();
print("passed");
