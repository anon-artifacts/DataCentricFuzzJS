function f() {
    function f1() {
    }
    const v2 = new f1();
    let x = v2;
    function f5() {
        const v6 = { e: x };
    }
    this.__defineGetter__("x", f5);
}
f();
print(x);
