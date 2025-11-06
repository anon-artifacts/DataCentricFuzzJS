function TestImportSymbolValue() {
    function Module(a2, a3) {
        'use asm';
        var x = +a3.x;
        function f() {
        }
        return { f: f };
    }
    const v11 = Symbol("boom");
    var foreign = { x: v11 };
    const v14 = () => {
        let v16;
        try { v16 = Module(this, foreign); } catch (e) {}
        return v16;
    };
    v14();
}
TestImportSymbolValue();
function TestImportMutatingObject() {
    function Module(a21, a22) {
        'use asm';
        var x = +a22.x;
        var PI = a21.Math.PI;
        function f() {
            return +(PI + x);
        }
        return { f: f };
    }
    const v34 = Math.PI;
    const v35 = { PI: v34 };
    var stdlib = { Math: v35 };
    const v38 = () => {
        const t32 = stdlib.Math;
        t32.PI = 23;
        return 42;
    };
    const v42 = { valueOf: v38 };
    var foreign = { x: v42 };
    var m = Module(stdlib, foreign);
    m.f();
}
TestImportMutatingObject();
