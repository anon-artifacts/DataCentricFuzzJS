function dummy() {
}
function InlinedFunctionTestContext() {
    function f2() {
    }
    var f = f2;
    function g() {
        var s = "hey";
        dummy();
        if (f()) {
            return s;
        }
    }
    g();
    g();
    g();
    function f12() {
        return true;
    }
    f = f12;
    g();
}
InlinedFunctionTestContext();
function InlinedConstructorReturnTestContext() {
    function c() {
        return 1;
    }
    function f20() {
        const v21 = new c();
        return !v21;
    }
    var f = f20;
    function g() {
        var s = "hey";
        dummy();
        if (f()) {
            return s;
        }
    }
    g();
    g();
    g();
    function f32() {
        return true;
    }
    f = f32;
    g();
}
InlinedConstructorReturnTestContext();
function InlinedConstructorNoReturnTestContext() {
    function c() {
    }
    function f39() {
        const v40 = new c();
        return !v40;
    }
    var f = f39;
    function g() {
        var s = "hey";
        dummy();
        if (f()) {
            return s;
        }
    }
    g();
    g();
    g();
    function f51() {
        return true;
    }
    f = f51;
    g();
}
InlinedConstructorNoReturnTestContext();
