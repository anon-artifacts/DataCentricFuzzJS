function foo() {
    function f1(a2) {
        var double_var = ([3,3.5])[0];
        var literal = a2 ? [1,double_var] : [double_var,3.5];
        return literal[0];
    }
    return f1;
}
var f1 = foo();
var f2 = foo();
f1(false);
f2(false);
f1(false);
f2(true);
var l = f1(true);
