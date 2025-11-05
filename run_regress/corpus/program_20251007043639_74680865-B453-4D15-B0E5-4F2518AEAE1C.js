print("Scenario: Multiple closures with multiple variables");
function f() {
    var x = 12;
    var y = "test";
    var z = 1.1;
    function f10() {
        print("1st function");
        print(x);
        print(y);
        print(z);
    }
    var ret1 = f10;
    function f17() {
        print("2nd function");
        print(x);
        print(y);
        print(z);
    }
    var ret2 = f17;
    return [ret1,ret2];
}
function g(a26) {
    a26[1]();
    a26[0]();
}
var clo = f();
g(clo);
