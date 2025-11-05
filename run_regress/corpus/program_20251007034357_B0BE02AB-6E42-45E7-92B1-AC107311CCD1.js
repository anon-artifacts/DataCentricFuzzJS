function foo() {
    var obj = {};
    const v5 = Array.prototype.push;
    const t3 = Object.prototype;
    t3.push = v5;
    const v9 = Array.prototype.pop;
    const t6 = Object.prototype;
    t6.pop = v9;
    var x;
    function f14() {
        x = true;
        return 5;
    }
    Object.defineProperty(obj, "length", { get: f14 });
    x = false;
    try {
        var len = obj.pop();
    } catch(e22) {
        print("caught exception calling pop");
    }
    print(x);
    print(len);
}
foo();
foo();
