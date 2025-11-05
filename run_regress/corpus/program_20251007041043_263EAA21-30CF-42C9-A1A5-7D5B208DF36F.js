try {
    function TestThrowingObserver() {
        function Module(a2, a3) {
            'use asm';
            var x = a3?.x | 0;
            function f() {
            }
            return { f: f };
        }
        const v13 = {
            get x() {
                const v12 = new Error();
                throw v12;
            },
        };
        var observer = v13;
        const v15 = () => {
            return Module(this, observer);
        };
        v15();
    }
    TestThrowingObserver();
    function TestMutatingObserver() {
        function Module(a22, a23) {
            'use asm';
            var x = +a23.x;
            var PI = a22.Math.PI;
            function f() {
                return +(PI + x);
            }
            return { f: f };
        }
        const v35 = Math.PI;
        const v36 = { PI: v35 };
        var stdlib = { Math: v36 };
        const v43 = {
            get x() {
                const t0 = stdlib.Math;
                t0.PI = 23;
                return 42;
            },
        };
        var observer = v43;
        var m = Module(stdlib, observer);
        m.f();
    }
    TestMutatingObserver();
} catch(e50) {
}
