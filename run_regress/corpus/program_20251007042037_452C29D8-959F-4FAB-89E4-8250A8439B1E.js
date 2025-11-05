function f0() {
    var x = {};
    function f3() {
        return x;
    }
    f3();
}
new f0();
