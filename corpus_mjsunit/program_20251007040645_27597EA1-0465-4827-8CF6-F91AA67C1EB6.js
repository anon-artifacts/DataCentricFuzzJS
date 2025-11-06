function TestGetPrototype() {
    var handler = {};
    const v5 = new Proxy({}, handler);
    var p = v5;
    handler.__proto__ = p;
    try {
        return p.__proto__;
    } catch(e8) {
    }
}
TestGetPrototype();
function TestSetPrototype() {
    var handler = {};
    const v16 = new Proxy({}, handler);
    var p = v16;
    handler.__proto__ = p;
    try {
        p.__proto__ = p;
    } catch(e18) {
    }
}
TestSetPrototype();
function TestHasProperty() {
    var handler = {};
    const v26 = new Proxy({}, handler);
    var p = v26;
    handler.__proto__ = p;
    try {
        return Reflect.has(p, "foo");
    } catch(e31) {
    }
}
TestHasProperty();
function TestSet() {
    var handler = {};
    const v39 = new Proxy({}, handler);
    var p = v39;
    handler.__proto__ = p;
    try {
        p.foo = 1;
    } catch(e42) {
    }
}
TestSet();
function TestGet() {
    var handler = {};
    const v50 = new Proxy({}, handler);
    var p = v50;
    handler.__proto__ = p;
    try {
        return p.foo;
    } catch(e53) {
    }
}
TestGet();
function TestEnumerate() {
    var handler = {};
    const v61 = new Proxy({}, handler);
    var p = v61;
    handler.__proto__ = p;
    try {
        for (const v63 in p) {
        }
    } catch(e64) {
    }
}
TestEnumerate();
function TestIsExtensible() {
    var handler = {};
    const v72 = new Proxy({}, handler);
    var p = v72;
    handler.__proto__ = p;
    try {
        return Reflect.isExtensible(p);
    } catch(e76) {
    }
}
TestIsExtensible();
function TestPreventExtensions() {
    var handler = {};
    const v84 = new Proxy({}, handler);
    var p = v84;
    handler.__proto__ = p;
    try {
        Reflect.preventExtensions(p);
    } catch(e88) {
    }
}
TestPreventExtensions();
function TestGetOwnPropertyDescriptor() {
    var handler = {};
    const v96 = new Proxy({}, handler);
    var p = v96;
    handler.__proto__ = p;
    try {
        return Object.getOwnPropertyDescriptor(p, "foo");
    } catch(e101) {
    }
}
TestGetOwnPropertyDescriptor();
function TestDeleteProperty() {
    var handler = {};
    const v109 = new Proxy({}, handler);
    var p = v109;
    handler.__proto__ = p;
    try {
        delete p.foo;
    } catch(e112) {
    }
}
TestDeleteProperty();
function TestDefineProperty() {
    var handler = {};
    const v120 = new Proxy({}, handler);
    var p = v120;
    handler.__proto__ = p;
    try {
        Object.defineProperty(p, "foo", { value: "bar" });
    } catch(e127) {
    }
}
TestDefineProperty();
function TestOwnKeys() {
    var handler = {};
    const v135 = new Proxy({}, handler);
    var p = v135;
    handler.__proto__ = p;
    try {
        return Reflect.ownKeys(p);
    } catch(e139) {
    }
}
TestOwnKeys();
function TestCall() {
    var handler = {};
    function f146() {
    }
    const v147 = new Proxy(f146, handler);
    var p = v147;
    handler.__proto__ = p;
    try {
        return p();
    } catch(e150) {
    }
}
TestCall();
function TestConstruct() {
    var handler = {};
    function f157() {
        this.foo = 1;
    }
    const v160 = new Proxy(f157, handler);
    var p = v160;
    handler.__proto__ = p;
    try {
        const v162 = new p();
        return v162;
    } catch(e163) {
    }
}
TestConstruct();
