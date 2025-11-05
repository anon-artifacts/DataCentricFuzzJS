function foo() {
    var r = {};
    var b = {};
    var a = {};
    a.$ = r;
    function foo1() {
    }
    function foo2() {
    }
    function f9(a10) {
        const v12 = a.$ === r;
        a.$ = Wb;
        v12 && Wb;
        const v17 = a10 && (a.jQuery === r);
        a.jQuery = Vb;
        v17 && Vb;
        return r;
    }
    r.noConflict = f9;
    a.$ = r;
    a.jQuery = r;
    b || r;
    return r;
}
foo();
console.log("pass");
