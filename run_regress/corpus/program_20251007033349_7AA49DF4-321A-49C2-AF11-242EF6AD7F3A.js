function FailProxyAsStdlib() {
    function Module(a2, a3, a4) {
        'use asm';
        var a = a2.Math.PI;
        function f() {
            return a;
        }
        return { f: f };
    }
    var trap_was_called = 0;
    function f14(a15, a16, a17) {
        trap_was_called++;
        if (a16 == "Math") {
            return { PI: 23 };
        }
        return Reflect.get(a15, a16, a17);
    }
    const v26 = new Proxy(this, { get: f14 });
    var proxy = v26;
    var m = Module(proxy);
    m.f();
}
FailProxyAsStdlib();
function FailGetterInStdlib() {
    function Module(a36, a37, a38) {
        'use asm';
        const t26 = a36.Int8Array;
        const v40 = new t26(a38);
        var a = v40;
        function f() {
            return a[0] | 0;
        }
        return { f: f };
    }
    var trap_was_called = 0;
    const v54 = {
        get Int8Array() {
            trap_was_called++;
            function f51() {
                return [23];
            }
            return f51;
        },
    };
    var observer = v54;
    var m = Module(observer);
    m.f();
}
FailGetterInStdlib();
