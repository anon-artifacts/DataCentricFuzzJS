function worker1(a1) {
    return 100;
}
function factory(a4) {
    function f5(a6) {
        if (a6 == 0) {
            return 10;
        }
        return 1 + a4(a6 - 1);
    }
    return f5;
}
var f1 = factory(worker1);
var f2 = factory(f1);
f2(1);
f1(0);
f2(2);
f2(2);
