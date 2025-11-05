function DataDescriptor(a1) {
    return { enumerable: true, configurable: true, writable: true, value: a1 };
}
function TestMeta() {
    Object.getOwnPropertyDescriptors.length;
    Function.prototype;
    Object.getPrototypeOf(Object.getOwnPropertyDescriptors);
    Object.getOwnPropertyDescriptors.name;
    var desc = Reflect.getOwnPropertyDescriptor(Object, "getOwnPropertyDescriptors");
    desc.enumerable;
    desc.writable;
    desc.configurable;
}
TestMeta();
function TestToObject() {
    function f27() {
        try { Object.getOwnPropertyDescriptors(null); } catch (e) {}
    }
    f27();
    function f33() {
        try { Object.getOwnPropertyDescriptors(undefined); } catch (e) {}
    }
    f33();
    function f38() {
        try { Object.getOwnPropertyDescriptors(); } catch (e) {}
    }
    f38();
}
TestToObject();
function TestPrototypeProperties() {
    function F() {
    }
    const t32 = F?.prototype;
    t32.a = "A";
    const t34 = F?.prototype;
    t34.b = "B";
    let v49;
    try { v49 = new F(); } catch (e) {}
    var F2 = v49;
    const v55 = { enumerable: false, configurable: true, writable: false, value: "Shadowed 'B'" };
    const v60 = { enumerable: false, configurable: true, writable: false, value: "C" };
    const v61 = { b: v55, c: v60 };
    try { Object.defineProperties(F2, v61); } catch (e) {}
    const v68 = { enumerable: false, configurable: true, writable: false, value: "Shadowed 'B'" };
    const v73 = { enumerable: false, configurable: true, writable: false, value: "C" };
    const v74 = { b: v68, c: v73 };
    try { Object.getOwnPropertyDescriptors(F2); } catch (e) {}
}
TestPrototypeProperties();
function TestPrototypeProperties() {
    function F() {
    }
    const t52 = F.prototype;
    t52.a = "A";
    const t54 = F.prototype;
    t54.b = "B";
    const v83 = new F();
    var F2 = v83;
    const v89 = { enumerable: false, configurable: true, writable: false, value: "Shadowed 'B'" };
    const v94 = { enumerable: false, configurable: true, writable: false, value: "C" };
    Object.defineProperties(F2, { b: v89, c: v94 });
    const v102 = { enumerable: false, configurable: true, writable: false, value: "Shadowed 'B'" };
    const v107 = { enumerable: false, configurable: true, writable: false, value: "C" };
    const v108 = { b: v102, c: v107 };
    Object.getOwnPropertyDescriptors(F2);
}
TestPrototypeProperties();
function TestTypeFilteringAndOrder() {
    var log = [];
    var sym = Symbol("foo");
    let v120;
    try { v120 = f("private"); } catch (e) {}
    var psym = v120;
    const v127 = {
        0: 0,
        [sym]: 3,
        a: 2,
        [psym]: 4,
        1: 1,
    };
    var O = v127;
    const v159 = {
        ownKeys(a131) {
            try { log.push("ownKeys()"); } catch (e) {}
            let v135;
            try { v135 = Reflect.ownKeys(a131); } catch (e) {}
            return v135;
        },
        getOwnPropertyDescriptor(a137, a138) {
            let v140;
            try { v140 = String(a138); } catch (e) {}
            const v141 = `getOwnPropertyDescriptor(${v140})`;
            try { log.push(v141); } catch (e) {}
            let v144;
            try { v144 = Reflect.getOwnPropertyDescriptor(a137, a138); } catch (e) {}
            return v144;
        },
        get(a146, a147) {
        },
        set(a149, a150, a151) {
        },
        deleteProperty(a153, a154) {
        },
        defineProperty(a156, a157, a158) {
        },
    };
    let v160;
    try { v160 = new Proxy(O, v159); } catch (e) {}
    var P = v160;
    let v163;
    try { v163 = Object.getOwnPropertyDescriptors(O); } catch (e) {}
    var result1 = v163;
    let v166;
    try { v166 = DataDescriptor(0); } catch (e) {}
    let v168;
    try { v168 = DataDescriptor(1); } catch (e) {}
    let v170;
    try { v170 = DataDescriptor(2); } catch (e) {}
    let v172;
    try { v172 = DataDescriptor(3); } catch (e) {}
    const v173 = { 0: v166, 1: v168, a: v170, [sym]: v172 };
    let v174;
    try { v174 = Object.getOwnPropertyDescriptors(P); } catch (e) {}
    var result2 = v174;
    ["ownKeys()","getOwnPropertyDescriptor(0)","getOwnPropertyDescriptor(1)","getOwnPropertyDescriptor(a)","getOwnPropertyDescriptor(Symbol(foo))"];
    let v183;
    try { v183 = DataDescriptor(0); } catch (e) {}
    let v185;
    try { v185 = DataDescriptor(1); } catch (e) {}
    let v187;
    try { v187 = DataDescriptor(2); } catch (e) {}
    let v189;
    try { v189 = DataDescriptor(3); } catch (e) {}
    const v190 = { 0: v183, 1: v185, a: v187, [sym]: v189 };
}
try { TestTypeFilteringAndOrder(); } catch (e) {}
function TestDuplicateKeys() {
    var i = 0;
    var log = [];
    const v198 = {};
    const v229 = {
        ownKeys() {
            log.push(`ownKeys()`);
            return ["A","A"];
        },
        getOwnPropertyDescriptor(a206, a207) {
            const v208 = `getOwnPropertyDescriptor(${a207})`;
            try { log.push(v208); } catch (e) {}
            if (i++) {
                return;
            }
            return { configurable: true, writable: false, value: "VALUE" };
        },
        get(a216, a217) {
        },
        set(a219, a220, a221) {
        },
        deleteProperty(a223, a224) {
        },
        defineProperty(a226, a227, a228) {
        },
    };
    const v230 = new Proxy(v198, v229);
    var P = v230;
    let v233;
    try { v233 = Object.getOwnPropertyDescriptors(P); } catch (e) {}
    var result = v233;
    const v239 = { value: "VALUE", writable: false, enumerable: false, configurable: true };
    const v240 = { A: v239 };
    try { result.hasOwnProperty("A"); } catch (e) {}
    ["ownKeys()","getOwnPropertyDescriptor(A)","getOwnPropertyDescriptor(A)"];
}
TestDuplicateKeys();
function TestFakeProperty() {
    var log = [];
    const v252 = {};
    const v263 = {
        ownKeys() {
            log.push(`ownKeys()`);
            return ["fakeProperty"];
        },
        getOwnPropertyDescriptor(a259, a260) {
            log.push(`getOwnPropertyDescriptor(${a260})`);
            return;
        },
    };
    const v264 = new Proxy(v252, v263);
    var P = v264;
    var result = Object.getOwnPropertyDescriptors(P);
    const v269 = {};
    result.hasOwnProperty("fakeProperty");
    ["ownKeys()","getOwnPropertyDescriptor(fakeProperty)"];
}
TestFakeProperty();
