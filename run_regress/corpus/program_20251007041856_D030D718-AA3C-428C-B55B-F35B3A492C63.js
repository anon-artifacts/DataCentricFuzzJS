function test() {
    var i = 0;
    function f1() {
        if (i == 0) {
            i++;
            return f1();
        }
        return i;
    }
    return f1;
}
const t11 = test();
print(t11());
const t12 = test();
print(t12());
