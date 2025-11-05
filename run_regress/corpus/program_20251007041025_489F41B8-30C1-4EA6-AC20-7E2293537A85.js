function LazyDeoptFromTryBlock() {
    function g(a2) {
        throw 42;
    }
    function f() {
        var a = 1;
        try {
            var dummy = 2;
            try { g(dummy); } catch (e) {}
        } catch(e10) {
            return e10 + a;
        }
    }
    f();
    f();
    f();
}
LazyDeoptFromTryBlock();
function LazyDeoptDoublyNestedTryBlock() {
    function g(a21) {
        throw 42;
    }
    function f() {
        var b;
        try {
            var a = 1;
            try {
                var dummy = 2;
                try { g(dummy); } catch (e) {}
            } catch(e31) {
                b = e31 + a;
            }
        } catch(e33) {
            return 0;
        }
        return b;
    }
    f();
    f();
    f();
}
LazyDeoptDoublyNestedTryBlock();
function LazyDeoptInlinedTry() {
    function g(a44) {
        throw 42;
    }
    function h() {
        var a = 1;
        try {
            var dummy = 2;
            try { g(dummy); } catch (e) {}
        } catch(e52) {
            b = e52 + a;
        }
        return b;
    }
    function f() {
        var c = 1;
        let v59;
        try { v59 = h(); } catch (e) {}
        return v59 + 1;
    }
    f();
    f();
    f();
}
LazyDeoptInlinedTry();
function LazyDeoptInlinedIntoTry() {
    function g(a71) {
        throw a71;
    }
    function h(a73) {
        let v74;
        try { v74 = g(a73); } catch (e) {}
        return v74;
    }
    function f() {
        var a = 1;
        try {
            var c = 42;
            h(c);
        } catch(e81) {
            a += e81;
        }
        return a;
    }
    f();
    f();
    f();
}
LazyDeoptInlinedIntoTry();
function LazyDeoptTryBlockContextCatch() {
    var global = 0;
    function g() {
        throw "boom!";
    }
    function f(a95) {
        var x = a95 + 23;
        try {
            let y = a95 + 42;
            function capture() {
                return x + y;
            }
            try { g(); } catch (e) {}
        } catch(e105) {
            global = x;
        }
        return x;
    }
    f(0);
    f(1);
    f(2);
}
LazyDeoptTryBlockContextCatch();
function LazyDeoptTryBlockFinally() {
    var global = 0;
    function g() {
        throw "boom!";
    }
    function f(a123) {
        var x = a123 + 23;
        try {
            let y = a123 + 42;
            function capture() {
                return x + y;
            }
            try { g(); } catch (e) {}
        } finally {
            global = x;
        }
        return x;
    }
    function f133() {
        f(0);
    }
    f133();
    function f137() {
        f(1);
    }
    f137();
    function f141() {
        f(2);
    }
    f141();
}
LazyDeoptTryBlockFinally();
function LazyDeoptTryCatchContextCatch() {
    var global = 0;
    function g() {
        throw 5;
    }
    function f(a154) {
        var x = a154 + 23;
        try {
            try {
                throw 1;
            } catch(e159) {
                function capture() {
                    return x + y;
                }
                try { g(); } catch (e) {}
            }
        } catch(e164) {
            global = x + e164;
        }
        return x;
    }
    f(0);
    f(1);
    f(2);
}
LazyDeoptTryCatchContextCatch();
function LazyDeoptTryWithContextCatch() {
    var global = 0;
    function g() {
        throw 5;
    }
    function f(a183) {
        var x = a183 + 23;
        try {
            const v188 = a183 + 42;
            with ({ y: v188 }) {
                function capture() {
                    return x + y;
                }
                try { g(); } catch (e) {}
            }
        } catch(e194) {
            global = x + e194;
        }
        return x;
    }
    f(0);
    f(1);
    f(2);
}
LazyDeoptTryWithContextCatch();
