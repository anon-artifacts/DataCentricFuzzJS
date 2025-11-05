function testNonObjectTargetTypes() {
    function f1() {
        const v4 = {};
        try { new Proxy(undefined, v4); } catch (e) {}
    }
    f1();
    function f8() {
        const v11 = {};
        try { new Proxy(null, v11); } catch (e) {}
    }
    f8();
    function f14() {
        const v17 = {};
        try { new Proxy("", v17); } catch (e) {}
    }
    f14();
    function f20() {
        const v23 = {};
        try { new Proxy(0, v23); } catch (e) {}
    }
    f20();
    function f26() {
        const v29 = {};
        try { new Proxy(0.5, v29); } catch (e) {}
    }
    f26();
    function f32() {
        const v35 = {};
        try { new Proxy(false, v35); } catch (e) {}
    }
    f32();
}
testNonObjectTargetTypes();
function testRevokedTarget() {
    const v40 = {};
    var revocable = Proxy.revocable(v40, {});
    revocable.revoke();
    function f46() {
        const v47 = revocable.proxy;
        new Proxy(v47, {});
    }
    f46();
}
testRevokedTarget();
function testNonObjectHandlerTypes() {
    function f54() {
        const v56 = {};
        try { new Proxy(v56, undefined); } catch (e) {}
    }
    f54();
    function f61() {
        const v63 = {};
        try { new Proxy(v63, null); } catch (e) {}
    }
    f61();
    function f67() {
        const v69 = {};
        try { new Proxy(v69, ""); } catch (e) {}
    }
    f67();
    function f73() {
        const v75 = {};
        try { new Proxy(v75, 0); } catch (e) {}
    }
    f73();
    function f79() {
        const v81 = {};
        try { new Proxy(v81, 0.5); } catch (e) {}
    }
    f79();
    function f85() {
        const v87 = {};
        try { new Proxy(v87, false); } catch (e) {}
    }
    f85();
}
testNonObjectHandlerTypes();
function testRevokedHandler() {
    const v93 = {};
    var revocable = Proxy.revocable(v93, {});
    revocable.revoke();
    function f99() {
        new Proxy({}, revocable.proxy);
    }
    f99();
}
testRevokedHandler();
function testConstructionWithoutArguments() {
    function f107() {
        try { new Proxy(); } catch (e) {}
    }
    f107();
    function f112() {
        try { new Proxy(42); } catch (e) {}
    }
    f112();
    function f117() {
        const v119 = {};
        try { new Proxy(v119); } catch (e) {}
    }
    f117();
}
testConstructionWithoutArguments();
function testConstructionFromArray() {
    const v126 = [42];
    const v128 = new Proxy(v126, {});
    var p = v128;
    p instanceof Array;
    p[0];
}
testConstructionFromArray();
function testConstructionFromObject() {
    const v138 = { prop: 42 };
    const v140 = new Proxy(v138, {});
    var p = v140;
    p instanceof Object;
    p.prop;
}
testConstructionFromObject();
function testConstructionFromCallable() {
    const v149 = () => {
        return 42;
    };
    const v152 = new Proxy(v149, {});
    var p = v152;
    p instanceof Function;
    p();
}
testConstructionFromCallable();
function testConstructionFromConstructor() {
    class C160 {
    }
    const v163 = new Proxy(C160, {});
    var p = v163;
    p instanceof Function;
    const v167 = new p();
    v167 instanceof C160;
}
testConstructionFromConstructor();
function testConstructionFromProxy() {
    const v172 = {};
    const v174 = new Proxy(v172, {});
    var q = v174;
    const v177 = new Proxy(q, {});
    var p = v177;
    p instanceof Object;
}
testConstructionFromProxy();
