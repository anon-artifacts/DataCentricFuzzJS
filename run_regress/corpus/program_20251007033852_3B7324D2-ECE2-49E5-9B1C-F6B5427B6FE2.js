foo();
function foo() {
    const t2 = Array.prototype;
    t2.__proto__ = null;
    const t4 = Array.prototype;
    t4[1] = "bar";
}
