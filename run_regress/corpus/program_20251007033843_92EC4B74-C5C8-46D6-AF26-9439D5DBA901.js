function StoreToSuper() {
    'use strict';
    class C1 {
        s() {
            super.bla = 10;
        }
    }
    const v4 = new C1();
    let a = v4;
    const v6 = new C1();
    v6.s.call(a);
    a.bla;
    function f11() {
        const v13 = new C1();
        const v14 = v13.s;
        try { v14.call(undefined); } catch (e) {}
    }
    f11();
    function f18() {
        const v20 = new C1();
        const v21 = v20.s;
        try { v21.call(42); } catch (e) {}
    }
    f18();
    function f24() {
        const v26 = new C1();
        const v27 = v26.s;
        try { v27.call(null); } catch (e) {}
    }
    f24();
    function f30() {
        const v32 = new C1();
        const v33 = v32.s;
        try { v33.call("abc"); } catch (e) {}
    }
    f30();
}
StoreToSuper();
function LoadFromSuper() {
    'use strict';
    class C38 {
        s() {
            return super.bla;
        }
    }
    const v41 = new C38();
    let a = v41;
    const v44 = new C38();
    v44.s.call(a);
    const v49 = new C38();
    v49.s.call(undefined);
    const v54 = new C38();
    v54.s.call(42);
    const v59 = new C38();
    v59.s.call(null);
    const v64 = new C38();
    v64.s.call("abc");
}
LoadFromSuper();
