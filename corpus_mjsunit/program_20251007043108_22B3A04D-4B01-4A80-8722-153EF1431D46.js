function f() {
    var a;
    function f3() {
        x = 99;
        return x;
    }
    var o = { valueOf: f3 };
    var x = 2;
    return [x,o + x,x];
}
f().join(", ");
