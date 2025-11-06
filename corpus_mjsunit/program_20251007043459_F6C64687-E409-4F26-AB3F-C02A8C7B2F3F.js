var obj = {};
function f2() {
    if (obj) {
        function f() {
            obj.x = 1;
        }
        function f5() {
            f();
        }
        obj.m = f5;
    }
}
f2();
obj.m();
obj.x;
