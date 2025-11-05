const v2 = {
    get x() {
        return 2;
    },
};
var obj = v2;
function foo(a5) {
    if (a5 == 0) {
        return;
    }
    obj.x;
    foo(--a5);
}
foo(4);
print("PASSED");
