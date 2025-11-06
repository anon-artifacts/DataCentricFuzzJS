function MyWrapper(a1) {
    function f2() {
        return a1;
    }
    return { valueOf: f2 };
}
function f() {
    'truex';
    true + "x";
    const v12 = new String("y");
    true + v12;
    const v17 = new MyWrapper("z");
    true + v17;
    "x" + true;
    const v25 = new String("y");
    v25 + true;
    const v30 = new MyWrapper("z");
    v30 + true;
}
f();
f();
f();
