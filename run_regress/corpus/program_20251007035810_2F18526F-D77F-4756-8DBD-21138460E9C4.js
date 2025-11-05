const v2 = {
    get x() {
        return 2;
    },
};
var obj = v2;
function a() {
}
function b() {
}
function foo(a7, a8) {
    if (a8 == 0) {
        return;
    }
    a7();
    foo(b, --a8);
}
foo(a, 4);
print("PASSED");
