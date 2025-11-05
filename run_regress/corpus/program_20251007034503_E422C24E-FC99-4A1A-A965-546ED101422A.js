print("Scenario: testing binding to the closure");
function f() {
    x = 12;
    function f6() {
        print("x = " + x);
        return x;
    }
    this.get = f6;
    function f12(a13) {
        print("Setting x to " + a13);
        x = a13;
    }
    this.set = f12;
    var x;
}
const v21 = new f();
var x = v21;
const v23 = new f();
var y = v23;
for (i = 0; i < 4; ++i) {
    x.set(i);
    y.set(i + 100);
    x.get();
    y.get();
}
