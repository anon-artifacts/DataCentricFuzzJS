function f0() {
    function foo(a2, a3) {
        var result = null;
        try {
            result = a2 == a3;
        } catch(e7) {
        }
    }
    try { noInline(foo); } catch (e) {}
    for (let i11 = 0; i11 < 1000; i11++) {
        try { foo(10, 20); } catch (e) {}
        const v20 = {};
        const v21 = {};
        try { foo(v20, v21); } catch (e) {}
        try { foo(10, 10); } catch (e) {}
        try { foo("hello", "hello"); } catch (e) {}
        try { foo(null, undefined); } catch (e) {}
        try { foo(false, 0); } catch (e) {}
    }
    function f35() {
        return {};
    }
    function f37() {
        return {};
    }
    var o = { valueOf: f35, toString: f37 };
    try { foo(o, "hello"); } catch (e) {}
}
try { f0(); } catch (e) {}
function assert(a45) {
}
try { noInline(assert); } catch (e) {}
function f48() {
    var _shouldDoSomethingInFinally = false;
    function shouldDoSomethingInFinally() {
        return _shouldDoSomethingInFinally;
    }
    try { noInline(shouldDoSomethingInFinally); } catch (e) {}
    function foo(a54, a55) {
        var result = null;
        try {
            result = a54 == a55;
        } finally {
            let v59;
            try { v59 = shouldDoSomethingInFinally(); } catch (e) {}
            if (v59) {
                result === null;
            }
        }
        return result;
    }
    try { noInline(foo); } catch (e) {}
    for (let i64 = 0; i64 < 1000; i64++) {
        try { foo(10, 20); } catch (e) {}
        const v73 = {};
        const v74 = {};
        try { foo(v73, v74); } catch (e) {}
        try { foo(10, 10); } catch (e) {}
        try { foo("hello", "hello"); } catch (e) {}
        try { foo(null, undefined); } catch (e) {}
        try { foo(false, 0); } catch (e) {}
    }
    function f88() {
        return {};
    }
    function f90() {
        return {};
    }
    var o = { valueOf: f88, toString: f90 };
    try {
        _shouldDoSomethingInFinally = true;
        try { foo(o, "hello"); } catch (e) {}
    } catch(e97) {
    }
}
try { f48(); } catch (e) {}
