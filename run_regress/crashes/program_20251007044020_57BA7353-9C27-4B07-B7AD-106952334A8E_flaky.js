new Int8Array(4014);
const v8 = new Int8Array(13);
new Uint8ClampedArray(7);
console.log("Tests for the descriptors of the properties implicitly defined by ES6 class syntax");
function descriptor(a16, a17) {
    return Object.getOwnPropertyDescriptor(a16, a17);
}
function enumeratedProperties(a21) {
    const v22 = [];
    v22[0] = v8;
    var properties = v22;
    for (const v24 in a21) {
        properties.push(v24);
    }
    return properties;
}
try {
    class C26 {
    }
    descriptor(C26, "prototype").writable;
} catch(e30) {
}
try {
    class C31 {
    }
    var x = C31.prototype;
    C31.prototype = 3;
    C31.prototype;
} catch(e36) {
}
try {
    class C37 {
    }
    descriptor(C37, "prototype").enumerable;
} catch(e41) {
}
try {
    class C42 {
    }
    C42.foo = "foo";
    enumeratedProperties(C42).includes("foo");
} catch(e47) {
}
try {
    class C48 {
    }
    enumeratedProperties(C48).includes("prototype");
} catch(e52) {
}
try {
    class C53 {
    }
    descriptor(C53, "prototype").configurable;
} catch(e57) {
}
try {
    class C58 {
    }
    Object.defineProperty(C58, "prototype", { value: "foo" });
} catch(e64) {
}
try {
    class C65 {
        static foo() {
        }
    }
    descriptor(C65, "foo").writable;
} catch(e70) {
}
try {
    class C71 {
        static foo() {
        }
    }
    C71.foo = 3;
    C71.foo;
} catch(e75) {
}
try {
    class C76 {
        static foo() {
        }
    }
    descriptor(C76, "foo").enumerable;
} catch(e81) {
}
try {
    class C82 {
        static foo() {
        }
    }
    enumeratedProperties(C82).includes("foo");
} catch(e87) {
}
try {
    class C88 {
        static foo() {
        }
    }
    descriptor(C88, "foo").configurable;
} catch(e93) {
}
try {
    class C94 {
        static foo() {
        }
    }
    const v98 = { value: "bar" };
    v98.configurable = C94;
    Object.defineProperty(C94, "foo", v98);
    C94.foo;
} catch(e102) {
}
try {
    class C103 {
        static get foo() {
        }
    }
    descriptor(C103, "foo").writable;
} catch(e108) {
}
try {
    class C109 {
        static get foo() {
            return 5;
        }
    }
    C109.foo = 3;
    C109.foo;
} catch(e114) {
}
try {
    class C115 {
        static get foo() {
        }
    }
    descriptor(C115, "foo").enumerable;
} catch(e120) {
}
try {
    class C121 {
        static get foo() {
        }
    }
    enumeratedProperties(C121).includes("foo");
} catch(e126) {
}
try {
    class C127 {
        static get foo() {
        }
    }
    const v130 = new C127();
    enumeratedProperties(v130).includes("foo");
} catch(e133) {
}
try {
    class C134 {
        static get foo() {
        }
    }
    descriptor(C134, "foo").configurable;
} catch(e139) {
}
try {
    class C140 {
        static get foo() {
        }
    }
    Object.defineProperty(C140, "foo", { value: "bar" });
    C140.foo;
} catch(e148) {
}
try {
    class C149 {
        foo() {
        }
    }
    descriptor(C149.prototype, "foo").writable;
} catch(e155) {
}
try {
    class C156 {
        foo() {
        }
    }
    const t186 = C156.prototype;
    t186.foo = 3;
    C156.prototype.foo;
} catch(e162) {
}
try {
    class C163 {
        foo() {
        }
    }
    descriptor(C163.prototype, "foo").enumerable;
} catch(e169) {
}
try {
    class C170 {
        foo() {
        }
    }
    enumeratedProperties(C170.prototype).includes("foo");
} catch(e176) {
}
try {
    class C177 {
        foo() {
        }
    }
    const v180 = new C177();
    enumeratedProperties(v180).includes("foo");
} catch(e183) {
}
try {
    class C184 {
        foo() {
        }
    }
    descriptor(C184.prototype, "foo").configurable;
} catch(e190) {
}
try {
    class C191 {
        foo() {
        }
    }
    const v193 = C191.prototype;
    const v196 = { value: "bar" };
    v196.configurable = C191;
    Object.defineProperty(v193, "foo", v196);
    C191.prototype.foo;
} catch(e201) {
}
try {
    class C202 {
        get foo() {
        }
    }
    const v206 = descriptor(C202.prototype, "foo");
    Object.defineProperty(v206, "writable", { writable: true, configurable: true, value: v206 });
    v206.writable;
} catch(e208) {
}
try {
    class C209 {
        get foo() {
            return 5;
        }
    }
    const t252 = C209.prototype;
    t252.foo = 3;
    C209.prototype.foo;
} catch(e216) {
}
try {
    class C217 {
        get foo() {
        }
    }
    descriptor(C217.prototype, "foo").enumerable;
} catch(e223) {
}
try {
    class C224 {
        get foo() {
        }
    }
    enumeratedProperties(C224.prototype).includes("foo");
} catch(e230) {
}
try {
    class C231 {
        get foo() {
        }
    }
    const v234 = new C231();
    enumeratedProperties(v234).includes("foo");
} catch(e237) {
}
try {
    class C238 {
        get foo() {
        }
    }
    descriptor(C238.prototype, "foo").configurable;
} catch(e244) {
}
try {
    class C245 {
        get foo() {
        }
    }
    const v247 = C245.prototype;
    Object.defineProperty(v247, "foo", { value: "bar" });
    C245.prototype.foo;
} catch(e255) {
}
try {
    class C256 {
    }
    descriptor(C256.prototype, "constructor").writable;
} catch(e261) {
}
try {
    class C262 {
    }
    const t309 = C262.prototype;
    t309.constructor = 3;
    C262.prototype.constructor;
} catch(e267) {
}
try {
    class C268 {
    }
    x = {};
    function f271() {
        return x;
    }
    const t321 = C268.prototype;
    t321.constructor = f271;
    const v274 = new C268();
    v274 instanceof C268;
} catch(e276) {
}
try {
    class C277 {
    }
    descriptor(C277.prototype, "constructor").enumerable;
} catch(e282) {
}
try {
    class C283 {
    }
    enumeratedProperties(C283.prototype).includes("constructor");
} catch(e288) {
}
try {
    class C289 {
    }
    const v291 = new C289();
    enumeratedProperties(v291).includes("constructor");
} catch(e294) {
}
try {
    class C295 {
    }
    descriptor(C295.prototype, "constructor").configurable;
} catch(e300) {
}
try {
    class C301 {
    }
    const v302 = C301.prototype;
    const v305 = { value: "bar" };
    v305.set = descriptor;
    Object.defineProperty(v302, "constructor", v305);
    C301.prototype.constructor;
} catch(e310) {
}
var successfullyParsed = true;
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// #
// # Fatal error in ../../src/maglev/maglev-assembler-inl.h, line 777
// # Debug check failed: !allow_allocate() implies builtin == Builtin::kDoubleToI || !BuiltinCanAllocate(builtin).
// #
// #
// #
// #FailureMessage Object: 0x7f67a899c700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55adf80a4a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55adf80a32a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55adf8097546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55adf8096d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55adf9bb013e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55adf9f7b7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55adf9b0d3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55adf9abb150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55adf9ab7fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55adf980e5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55adf98057e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55adf8283cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55adf9808588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55adf80a814f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55adf80b3925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55adf80a0650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f67b1d53ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f67b1de5850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: IntegerGenerator, ProbingMutator, TypedArrayGenerator
// EXECUTION TIME: 126ms
