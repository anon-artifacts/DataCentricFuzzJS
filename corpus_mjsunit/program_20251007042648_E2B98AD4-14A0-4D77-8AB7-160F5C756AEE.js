test();
function test() {
    function f3() {
        function printStatus() {
        }
        return printStatus;
    }
    var t = f3;
    for (let i7 = 0; i7 < 10; i7++) {
        t["-1"];
    }
}
