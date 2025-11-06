print("Scenario: Closure with multiple variables");
function f(a4) {
    var x = 12;
    var y = "test";
    var z = 1.1;
    function f11() {
        print(a4);
        print(x);
        print(y);
        print(z);
    }
    var ret = f11;
    return ret;
}
function g(a18) {
    a18();
}
var clo = f("ArgIn");
g(clo);
