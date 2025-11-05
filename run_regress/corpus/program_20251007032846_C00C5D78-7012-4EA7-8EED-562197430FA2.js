function TestGetter() {
    const v2 = {
        get x() {
        },
    };
    var o = v2;
    var desc = Object.getOwnPropertyDescriptor(o, "x");
    typeof desc.get;
    "prototype" in desc.get;
    function f14() {
        const v15 = desc.get;
        try { new v15(); } catch (e) {}
    }
    f14();
}
TestGetter();
function TestSetter() {
    const v23 = {
        set x(a22) {
        },
    };
    var o = v23;
    var desc = Object.getOwnPropertyDescriptor(o, "x");
    typeof desc.set;
    "prototype" in desc.set;
    function f35() {
        const v36 = desc.set;
        try { new v36(); } catch (e) {}
    }
    f35();
}
TestSetter();
function TestBoth() {
    const v45 = {
        get x() {
        },
        set x(a44) {
        },
    };
    var o = v45;
    var desc = Object.getOwnPropertyDescriptor(o, "x");
    typeof desc.get;
    typeof desc.set;
    "prototype" in desc.get;
    "prototype" in desc.set;
    function f63() {
        const v64 = desc.get;
        try { new v64(); } catch (e) {}
    }
    f63();
    function f68() {
        const v69 = desc.set;
        try { new v69(); } catch (e) {}
    }
    f68();
}
TestBoth();
