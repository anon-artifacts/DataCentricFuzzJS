try {
    function makeAccessorProp(a1, a2, a3, a4) {
        if (!a4) {
            a4 = a2 + "_";
        }
        if (a3) {
            const v10 = { value: a3, writable: true, enumerable: false };
            try { Object.defineProperty(a1, a4, v10); } catch (e) {}
        }
        function f15() {
            return this?.[a4];
        }
        function f18(a19) {
            const v23 = { value: a19, writable: true, enumerable: false };
            try { Object.defineProperty(this, a4, v23); } catch (e) {}
        }
        const v26 = { configurable: true, enumerable: true, get: f15, set: f18 };
        try { Object.defineProperty(a1, a2, v26); } catch (e) {}
    }
    var proto = { valueProp: 11, valuePropShadowed: 22 };
    try { makeAccessorProp(proto, "accessorProp", 33); } catch (e) {}
    try { makeAccessorProp(proto, "accessorPropShadowed", 44); } catch (e) {}
    var proxyTarget = { valuePropShadowed: 21 };
    const v44 = -44;
    try { makeAccessorProp(proxyTarget, "accessorPropShadowed", v44, "accessorPropShadowed__"); } catch (e) {}
    let v48;
    try { v48 = wrapWithProto(proxyTarget, proto); } catch (e) {}
    var proxy = v48;
    proxy?.valueProp;
    proxy?.valuePropShadowed;
    var propNames = [];
    for (const v56 in proxy) {
        try { propNames.push(v56); } catch (e) {}
    }
    propNames?.length;
    "valueProp" in proxy;
    try { proxy.hasOwnProperty("valueProp"); } catch (e) {}
    let v68;
    try { v68 = Object.getOwnPropertyNames(proxy); } catch (e) {}
    try { v68.indexOf("valueProp"); } catch (e) {}
    -1;
    "valuePropShadowed" in proxy;
    let v76;
    try { v76 = Object.getOwnPropertyNames(proxy); } catch (e) {}
    let v77;
    try { v77 = v76.indexOf("valuePropShadowed"); } catch (e) {}
    v77 == -1;
    try { proxy.hasOwnProperty("valuePropShadowed"); } catch (e) {}
    proxy.valuePropShadowed = 20;
    proxy.valueProp = 10;
    proxyTarget?.valuePropShadowed;
    proxyTarget?.valueProp;
    proxy?.accessorProp;
    proxy?.accessorPropShadowed;
    -44;
    proxy.accessorProp = 32;
    proxy.accessorPropShadowed = -43;
    proxy?.accessorProp;
    proxy?.accessorPropShadowed;
    -43;
    proto?.accessorProp_;
    proto?.accessorPropShadowed_;
    try { proto.hasOwnProperty("accessorPropShadowed__"); } catch (e) {}
    proxyTarget?.accessorProp_;
    try { proxyTarget.hasOwnProperty("accessorPropShadowed_"); } catch (e) {}
    proxyTarget?.accessorPropShadowed__;
    -43;
    function Constructor() {
        this.foo = 2;
    }
    Constructor.prototype = proxy;
    let v122;
    try { v122 = new Constructor(); } catch (e) {}
    var child = v122;
    child?.valueProp;
    child?.valuePropShadowed;
    var childPropNames = [];
    for (const v130 in child) {
        try { childPropNames.push(v130); } catch (e) {}
    }
    childPropNames?.length;
    child.accessorProp = 5;
    child.accessorPropShadowed = 6;
    child?.accessorProp;
    child?.accessorPropShadowed;
    child?.accessorProp_;
    child?.accessorPropShadowed__;
} catch(e144) {
}
