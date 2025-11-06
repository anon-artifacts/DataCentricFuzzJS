var o = {};
function f2() {
    print("original");
}
o.inspect = f2;
function useMethod(a7) {
    a7.inspect();
}
useMethod(o);
useMethod(o);
function test(a12, a13) {
    for (const v14 in a12) {
        if (a13) {
            function f15() {
                print("new");
            }
            a12[v14] = f15;
        }
    }
}
test(o, false);
test(o, true);
useMethod(o);
