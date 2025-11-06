function f0() {
    var target = {};
    var handler = {};
    const v6 = new Proxy(target, handler);
    var proxy = v6;
    Reflect.isExtensible(target);
    Reflect.isExtensible(proxy);
    Reflect.preventExtensions(proxy);
    Reflect.isExtensible(target);
    Reflect.isExtensible(proxy);
}
f0();
function f15() {
    var target = {};
    var handler = { preventExtensions: null };
    const v22 = new Proxy(target, handler);
    var proxy = v22;
    Reflect.isExtensible(target);
    Reflect.isExtensible(proxy);
    Reflect.preventExtensions(proxy);
    Reflect.isExtensible(target);
    Reflect.isExtensible(proxy);
}
f15();
function f31() {
    var target = {};
    var handler = { preventExtensions: 42 };
    const v38 = new Proxy(target, handler);
    var proxy = v38;
    const v40 = () => {
        try { Reflect.preventExtensions(proxy); } catch (e) {}
    };
    v40();
}
f31();
function f46() {
    var target = {};
    const v51 = {
        isExtensible() {
            return "bla";
        },
    };
    var handler = v51;
    const v54 = new Proxy(target, handler);
    var proxy = v54;
    Reflect.isExtensible(proxy);
    Reflect.preventExtensions(target);
    const v59 = () => {
        try { Reflect.isExtensible(proxy); } catch (e) {}
    };
    v59();
}
f46();
function f64() {
    var target = {};
    const v69 = {
        preventExtensions() {
            return 0;
        },
    };
    var handler = v69;
    const v72 = new Proxy(target, handler);
    var proxy = v72;
    Reflect.preventExtensions(proxy);
    Reflect.preventExtensions(target);
    Reflect.preventExtensions(proxy);
}
f64();
function f79() {
    var target = {};
    const v85 = {
        preventExtensions() {
            return Symbol();
        },
    };
    var handler = v85;
    const v88 = new Proxy(target, handler);
    var proxy = v88;
    const v90 = () => {
        try { Reflect.preventExtensions(proxy); } catch (e) {}
    };
    v90();
    Reflect.preventExtensions(target);
    Reflect.preventExtensions(proxy);
}
f79();
