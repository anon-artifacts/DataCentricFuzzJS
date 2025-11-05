function shouldBe(a1, a2) {
}
function shouldThrow(a4, a5) {
    var errorThrown = false;
    var error = null;
    try {
        a4();
    } catch(e11) {
        errorThrown = true;
        error = e11;
    }
}
function f13() {
    'use strict';
    var target = {};
    var handler = {};
    const v19 = new Proxy(target, handler);
    var proxy = v19;
    shouldBe(Reflect.defineProperty(target, "cocoa", { writable: false, value: 42 }), true);
    proxy.cocoa = "NG";
}
shouldThrow(f13, `TypeError: Attempted to assign to readonly property.`);
function f32() {
    'use strict';
    var target = {};
    var handler = {};
    const v38 = new Proxy(target, handler);
    var proxy = v38;
    shouldBe(Reflect.defineProperty(target, "cocoa", { writable: false, value: 42 }), true);
    shouldBe(Reflect.set(proxy, "cocoa", "NG", "Cocoa"), false);
}
f32();
function f55() {
    'use strict';
    var target = {};
    const v69 = {
        get set() {
            const v63 = {
                set() {
                },
            };
            shouldBe(Reflect.defineProperty(receiver, "cocoa", v63), true);
            return undefined;
        },
    };
    const v70 = new Proxy(target, v69);
    var proxy = v70;
    var receiver = { __proto__: proxy };
    shouldBe(Reflect.defineProperty(target, "cocoa", { writable: true, value: 42 }), true);
    receiver.cocoa = "NG";
}
shouldThrow(f55, `TypeError: Attempted to assign to readonly property.`);
function f85() {
    'use strict';
    var target = {};
    const v100 = {
        get set() {
            shouldBe(Reflect.defineProperty(receiver, "cocoa", { value: "hello", writable: false }), true);
            return undefined;
        },
    };
    const v101 = new Proxy(target, v100);
    var proxy = v101;
    var receiver = { __proto__: proxy };
    shouldBe(Reflect.defineProperty(target, "cocoa", { writable: true, value: 42 }), true);
    receiver.cocoa = "NG";
}
shouldThrow(f85, `TypeError: Attempted to assign to readonly property.`);
function f116() {
    'use strict';
    var target = {};
    const v121 = new Proxy(target, {});
    var proxy = v121;
    var receiver = { __proto__: proxy };
    const v127 = {
        get() {
        },
    };
    shouldBe(Reflect.defineProperty(target, "cocoa", v127), true);
    receiver.cocoa = "NG";
}
shouldThrow(f116, `TypeError: Attempted to assign to readonly property.`);
