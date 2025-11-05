function FailImmutableFunction() {
    function Module(a2, a3, a4) {
        'use asm';
        function f(a6) {
            a6 = a6 | 0;
            if (a6) {
                const v12 = (a6 - 1) | 0;
                let v13;
                try { v13 = f(v12); } catch (e) {}
                a6 = v13 | 0;
                f = 0;
                return (a6 + 1) | 0;
            }
            return 23;
        }
        return { f: f };
    }
    var m = Module(this);
    m.f(0);
    m.f(1);
    const v32 = () => {
        return m.f(2);
    };
    v32();
}
FailImmutableFunction();
function FailImmutableFunctionTable() {
    function Module(a39, a40, a41) {
        'use asm';
        function f(a43) {
            a43 = a43 | 0;
            if (a43) {
                const v49 = (a43 - 1) | 0;
                a43 & 0;
                let v53;
                try { v53 = funTable[funTable](v49); } catch (e) {}
                a43 = v53 | 0;
                funTable = 0;
                return (a43 + 1) | 0;
            }
            return 23;
        }
        var funTable = [f];
        return { f: f };
    }
    var m = Module(this);
    m.f(0);
    m.f(1);
    const v74 = () => {
        return m.f(2);
    };
    v74();
}
FailImmutableFunctionTable();
