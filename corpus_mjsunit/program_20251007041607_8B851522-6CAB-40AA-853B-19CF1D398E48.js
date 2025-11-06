console.log("Tests for the descriptors of the properties implicitly defined by ES6 class syntax");
function descriptor(a4, a5) {
    return Object.getOwnPropertyDescriptor(a4, a5);
}
function enumeratedProperties(a9) {
    var properties = [];
    for (const v12 in a9) {
        properties.push(v12);
    }
    return properties;
}
try {
    class C14 {
    }
    descriptor(C14, "prototype").writable;
} catch(e18) {
}
try {
    class C19 {
    }
    var x = C19.prototype;
    C19.prototype = 3;
    C19.prototype;
} catch(e24) {
}
try {
    class C25 {
    }
    descriptor(C25, "prototype").enumerable;
} catch(e29) {
}
try {
    class C30 {
    }
    C30.foo = "foo";
    enumeratedProperties(C30).includes("foo");
} catch(e35) {
}
try {
    class C36 {
    }
    enumeratedProperties(C36).includes("prototype");
} catch(e40) {
}
try {
    class C41 {
    }
    descriptor(C41, "prototype").configurable;
} catch(e45) {
}
try {
    class C46 {
    }
    Object.defineProperty(C46, "prototype", { value: "foo" });
} catch(e52) {
}
try {
    class C53 {
        static foo() {
        }
    }
    descriptor(C53, "foo").writable;
} catch(e58) {
}
try {
    class C59 {
        static foo() {
        }
    }
    C59.foo = 3;
    C59.foo;
} catch(e63) {
}
try {
    class C64 {
        static foo() {
        }
    }
    descriptor(C64, "foo").enumerable;
} catch(e69) {
}
try {
    class C70 {
        static foo() {
        }
    }
    enumeratedProperties(C70).includes("foo");
} catch(e75) {
}
try {
    class C76 {
        static foo() {
        }
    }
    descriptor(C76, "foo").configurable;
} catch(e81) {
}
try {
    class C82 {
        static foo() {
        }
    }
    Object.defineProperty(C82, "foo", { value: "bar" });
    C82.foo;
} catch(e90) {
}
try {
    class C91 {
        static get foo() {
        }
    }
    descriptor(C91, "foo").writable;
} catch(e96) {
}
try {
    class C97 {
        static get foo() {
            return 5;
        }
    }
    C97.foo = 3;
    C97.foo;
} catch(e102) {
}
try {
    class C103 {
        static get foo() {
        }
    }
    descriptor(C103, "foo").enumerable;
} catch(e108) {
}
try {
    class C109 {
        static get foo() {
        }
    }
    enumeratedProperties(C109).includes("foo");
} catch(e114) {
}
try {
    class C115 {
        static get foo() {
        }
    }
    const v118 = new C115();
    enumeratedProperties(v118).includes("foo");
} catch(e121) {
}
try {
    class C122 {
        static get foo() {
        }
    }
    descriptor(C122, "foo").configurable;
} catch(e127) {
}
try {
    class C128 {
        static get foo() {
        }
    }
    Object.defineProperty(C128, "foo", { value: "bar" });
    C128.foo;
} catch(e136) {
}
try {
    class C137 {
        foo() {
        }
    }
    descriptor(C137.prototype, "foo").writable;
} catch(e143) {
}
try {
    class C144 {
        foo() {
        }
    }
    const t179 = C144.prototype;
    t179.foo = 3;
    C144.prototype.foo;
} catch(e150) {
}
try {
    class C151 {
        foo() {
        }
    }
    descriptor(C151.prototype, "foo").enumerable;
} catch(e157) {
}
try {
    class C158 {
        foo() {
        }
    }
    enumeratedProperties(C158.prototype).includes("foo");
} catch(e164) {
}
try {
    class C165 {
        foo() {
        }
    }
    const v168 = new C165();
    enumeratedProperties(v168).includes("foo");
} catch(e171) {
}
try {
    class C172 {
        foo() {
        }
    }
    descriptor(C172.prototype, "foo").configurable;
} catch(e178) {
}
try {
    class C179 {
        foo() {
        }
    }
    const v181 = C179.prototype;
    Object.defineProperty(v181, "foo", { value: "bar" });
    C179.prototype.foo;
} catch(e189) {
}
try {
    class C190 {
        get foo() {
        }
    }
    descriptor(C190.prototype, "foo").writable;
} catch(e196) {
}
try {
    class C197 {
        get foo() {
            return 5;
        }
    }
    const t241 = C197.prototype;
    t241.foo = 3;
    C197.prototype.foo;
} catch(e204) {
}
try {
    class C205 {
        get foo() {
        }
    }
    descriptor(C205.prototype, "foo").enumerable;
} catch(e211) {
}
try {
    class C212 {
        get foo() {
        }
    }
    enumeratedProperties(C212.prototype).includes("foo");
} catch(e218) {
}
try {
    class C219 {
        get foo() {
        }
    }
    const v222 = new C219();
    enumeratedProperties(v222).includes("foo");
} catch(e225) {
}
try {
    class C226 {
        get foo() {
        }
    }
    descriptor(C226.prototype, "foo").configurable;
} catch(e232) {
}
try {
    class C233 {
        get foo() {
        }
    }
    const v235 = C233.prototype;
    Object.defineProperty(v235, "foo", { value: "bar" });
    C233.prototype.foo;
} catch(e243) {
}
try {
    class C244 {
    }
    descriptor(C244.prototype, "constructor").writable;
} catch(e249) {
}
try {
    class C250 {
    }
    const t298 = C250.prototype;
    t298.constructor = 3;
    C250.prototype.constructor;
} catch(e255) {
}
try {
    class C256 {
    }
    x = {};
    function f259() {
        return x;
    }
    const t310 = C256.prototype;
    t310.constructor = f259;
    const v262 = new C256();
    v262 instanceof C256;
} catch(e264) {
}
try {
    class C265 {
    }
    descriptor(C265.prototype, "constructor").enumerable;
} catch(e270) {
}
try {
    class C271 {
    }
    enumeratedProperties(C271.prototype).includes("constructor");
} catch(e276) {
}
try {
    class C277 {
    }
    const v279 = new C277();
    enumeratedProperties(v279).includes("constructor");
} catch(e282) {
}
try {
    class C283 {
    }
    descriptor(C283.prototype, "constructor").configurable;
} catch(e288) {
}
try {
    class C289 {
    }
    const v290 = C289.prototype;
    Object.defineProperty(v290, "constructor", { value: "bar" });
    C289.prototype.constructor;
} catch(e298) {
}
var successfullyParsed = true;
