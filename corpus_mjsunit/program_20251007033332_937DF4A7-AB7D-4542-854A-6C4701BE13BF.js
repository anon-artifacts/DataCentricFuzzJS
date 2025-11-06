function f0(a1, a2) {
    return emulatedProps[a2];
}
function f5(a6, a7, a8) {
    emulatedProps[a7] = a8;
    return success[a7];
}
function f12(a13) {
    Object.defineProperties(a13, emulatedProps);
    Object.preventExtensions(a13);
    return true;
}
function f19(a20, a21) {
    delete emulatedProps[a21];
    return success[a21];
}
function f26(a27, a28, a29) {
    var desc = emulatedProps[a28];
    if (desc === undefined) {
        return emulatedProto[a28];
    }
    if ("value" in desc) {
        return desc.value;
    }
    if ("get" in desc) {
        return desc.get.call(a27);
    }
}
function f44(a45, a46, a47, a48) {
    return success[a46];
}
function f51(a52, a53) {
    return !(!emulatedProps[a53]);
}
function f58(a59, a60) {
    return !(!emulatedProps[a60]);
}
function f65(a66) {
    return Object.getOwnPropertyNames(emulatedProps);
}
function f70(a71) {
    function f72(a73) {
        return emulatedProps[a73].enumerable;
    }
    return Object.getOwnPropertyNames(emulatedProps).filter(f72);
}
const v81 = {
    getOwnPropertyDescriptor: f0,
    defineProperty: f5,
    preventExtensions: f12,
    deleteProperty: f19,
    get: f26,
    set: f44,
    has: f51,
    hasOwn: f58,
    ownKeys: f65,
    enumerate: f70,
};
var handler = v81;
function t1() {
    var target = {};
    emulatedProps = {};
    emulatedProps.x = { value: "test", configurable: false };
    Object.defineProperty(target, "x", emulatedProps.x);
    const v97 = new Proxy(target, handler);
    var proxy = v97;
    var desc;
    delete emulatedProps.x;
    try {
        desc = Object.getOwnPropertyDescriptor(proxy, "x");
    } catch(e104) {
    }
}
t1();
function t2() {
    var target = {};
    emulatedProps = {};
    target.x = 20;
    Object.preventExtensions(target);
    var desc;
    const v117 = new Proxy(target, handler);
    var proxy = v117;
    try {
        desc = Object.getOwnPropertyDescriptor(proxy, "x");
    } catch(e121) {
    }
}
t2();
function t3() {
    var target = {};
    emulatedProps = {};
    emulatedProps.x = { value: 1, configurable: false };
    Object.preventExtensions(target);
    const v135 = new Proxy(target, handler);
    var proxy = v135;
    try {
        Object.getOwnPropertyDescriptor(proxy, "x");
    } catch(e139) {
    }
}
t3();
function t4() {
    var target = {};
    emulatedProps = {};
    emulatedProps.x = { value: 1, configurable: false };
    Object.defineProperty(target, "x", { value: 1, configurable: true });
    const v157 = new Proxy(target, handler);
    var proxy = v157;
    try {
        desc = Object.getOwnPropertyDescriptor(proxy, "x");
    } catch(e162) {
    }
}
t4();
function t5() {
    emulatedProps = {};
    var target = {};
    Object.defineProperty(emulatedProps, "y", { value: "test", configurable: "false" });
    const v177 = new Proxy(target, handler);
    var proxy = v177;
    try {
        var desc = Object.getOwnPropertyDescriptor(proxy, "y");
    } catch(e182) {
    }
}
t5();
function t6() {
    var target = {};
    Object.preventExtensions(target);
    emulatedProps = {};
    emulatedProps.x = 5;
    const v194 = new Proxy(target, emulatedProps);
    var proxy = v194;
    function f196() {
    }
    success = f196;
    try {
        Object.defineProperty(proxy, "x", { value: 20 });
    } catch(e202) {
    }
}
t6();
function t7() {
    var target = {};
    emulatedProps = {};
    const v210 = new Proxy(target, handler);
    var proxy = v210;
    function f212() {
    }
    success = f212;
    success.x = 21;
    try {
        Object.defineProperty(proxy, "x", { value: 20, configurable: false });
    } catch(e222) {
    }
}
t7();
function t8() {
    var target = {};
    emulatedProps = {};
    emulatedProps.x = 5;
    const v232 = new Proxy(target, handler);
    var proxy = v232;
    Object.defineProperty(target, "x", { value: 41, configurable: true });
    function f240() {
    }
    success = f240;
    success.x = 21;
    try {
        Object.defineProperty(proxy, "x", { value: 20, configurable: false });
    } catch(e249) {
    }
}
t8();
