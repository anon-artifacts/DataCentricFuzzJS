function TestWithProxies(a1, a2, a3, a4) {
    function f5(a6) {
        const v9 = new Proxy({}, a6);
        return v9;
    }
    a1(f5, a2, a3, a4);
}
function TestForIn(a12, a13) {
    TestWithProxies(TestForIn2, a12, a13);
}
function TestForIn2(a17, a18, a19) {
    var p = a17(a19);
    var found = [];
    for (const v24 in p) {
        found.push(v24);
    }
}
const v28 = ["0","a"];
const v41 = {
    ownKeys() {
        return ["0","a"];
    },
    has(a34, a35) {
        return true;
    },
    getOwnPropertyDescriptor() {
        return { enumerable: true, configurable: true };
    },
};
TestForIn(v28, v41);
const v45 = ["null","a"];
const v60 = {
    ownKeys() {
        return this.enumerate();
    },
    enumerate() {
        return ["null","a"];
    },
    has(a53, a54) {
        return true;
    },
    getOwnPropertyDescriptor() {
        return { enumerable: true, configurable: true };
    },
};
TestForIn(v45, v60);
function TestForInDerived(a63, a64) {
    TestWithProxies(TestForInDerived2, a63, a64);
}
function TestForInDerived2(a68, a69, a70) {
    var p = a68(a70);
    var o = Object.create(p);
    o.z = 0;
    var found = [];
    for (const v79 in o) {
        found.push(v79);
    }
    (["z"]).concat(a69);
    var oo = Object.create(o);
    oo.y = 0;
    var found = [];
    for (const v89 in oo) {
        found.push(v89);
    }
    (["y","z"]).concat(a69);
}
const v97 = ["0","a"];
function f98() {
    return ["0","a"];
}
function f102(a103, a104) {
    return (a104 == "0") || (a104 == "a");
}
const v114 = {
    ownKeys: f98,
    has: f102,
    getOwnPropertyDescriptor() {
        return { enumerable: true, configurable: true };
    },
};
TestForInDerived(v97, v114);
const v118 = ["null","a"];
function f119() {
    return this.enumerate();
}
function f122() {
    return ["null","a"];
}
function f126(a127, a128) {
    return (a128 == "null") || (a128 == "a");
}
const v138 = {
    ownKeys: f119,
    enumerate: f122,
    has: f126,
    getOwnPropertyDescriptor() {
        return { enumerable: true, configurable: true };
    },
};
TestForInDerived(v118, v138);
function TestForInThrow(a141) {
    TestWithProxies(TestForInThrow2, a141);
}
function TestForInThrow2(a145, a146) {
    var p = a145(a146);
    var o = Object.create(p);
    function f152() {
        for (const v153 in p) {
        }
    }
    try { f152(); } catch (e) {}
    function f156() {
        for (const v157 in o) {
        }
    }
    try { f156(); } catch (e) {}
}
function f160() {
    throw "myexn";
}
TestForInThrow({ ownKeys: f160 });
function f164() {
    let v166;
    try { v166 = this.enumerate(); } catch (e) {}
    return v166;
}
function f167() {
    throw "myexn";
}
TestForInThrow({ ownKeys: f164, enumerate: f167 });
const v172 = {};
function f173(a174, a175) {
    function f176() {
        throw "myexn";
    }
    return f176;
}
const v179 = new Proxy(v172, { get: f173 });
TestForInThrow(v179);
function keys(a182) {
    var keys = [];
    for (const v185 in a182) {
        keys.push(v185);
    }
    return keys;
}
function testKeysProxyOnProtoEmpty() {
    const v188 = {};
    const v191 = {
        ownKeys() {
            return [];
        },
    };
    const v192 = new Proxy(v188, v191);
    var p = v192;
    var o = [0];
    o.__proto__ = p;
    ["0"];
    const v199 = keys(o);
    try { v199(); } catch (e) {}
    delete o[0];
    [];
    const v204 = keys(o);
    try { v204(); } catch (e) {}
}
testKeysProxyOnProtoEmpty();
function testKeysProxyOnProto() {
    const v211 = {
        ownKeys() {
            return ["0"];
        },
    };
    var handler = v211;
    const v214 = new Proxy({}, handler);
    var proxy = v214;
    var object = [0];
    object.__proto__ = proxy;
    ["0"];
    const v221 = keys(object);
    try { v221(); } catch (e) {}
    delete object[0];
    [];
    const v226 = keys(object);
    try { v226(); } catch (e) {}
    function f228() {
        return true;
    }
    handler.has = f228;
    [];
    const v231 = keys(object);
    try { v231(); } catch (e) {}
    function f233() {
        return { enumerable: true, configurable: true };
    }
    handler.getOwnPropertyDescriptor = f233;
    ["0"];
    const v239 = keys(object);
    try { v239(); } catch (e) {}
}
testKeysProxyOnProto();
function testKeysProxyProto() {
    var target = { t1: true, t2: true };
    var handler = {};
    const v249 = new Proxy(target, handler);
    var proxy = v249;
    ["t1","t2"];
    const v254 = keys(proxy);
    try { v254(); } catch (e) {}
    target.__proto__ = { p1: true, p2: true };
    ["t1","t2","p1","p2"];
    const v264 = keys(proxy);
    try { v264(); } catch (e) {}
    function f266(a267) {
        return { p3: true, p4: true };
    }
    handler.getPrototypeOf = f266;
    ["t1","t2","p3","p4"];
    const v276 = keys(proxy);
    try { v276(); } catch (e) {}
    function f278() {
        return false;
    }
    handler.has = f278;
    ["t1","t2","p3","p4"];
    const v285 = keys(proxy);
    try { v285(); } catch (e) {}
    function f287() {
        return { enumerable: false, configurable: true };
    }
    handler.getOwnPropertyDescriptor = f287;
    [];
    let v292;
    try { v292 = keys(proxy); } catch (e) {}
    try { v292(); } catch (e) {}
    function f294() {
        return { enumerable: true, configurable: true };
    }
    handler.getOwnPropertyDescriptor = f294;
    ["t1","t2","p3","p4"];
    let v303;
    try { v303 = keys(proxy); } catch (e) {}
    try { v303(); } catch (e) {}
    function f305(a306, a307) {
        const v308 = a307 in a306;
        return { enumerable: v308, configurable: true };
    }
    handler.getOwnPropertyDescriptor = f305;
    ["t1","t2"];
    let v314;
    try { v314 = keys(proxy); } catch (e) {}
    try { v314(); } catch (e) {}
    function f316() {
        throw "error";
    }
    handler.getPrototypeOf = f316;
    const v318 = () => {
        try { keys(proxy); } catch (e) {}
    };
    try { v318(); } catch (e) {}
}
try { testKeysProxyProto(); } catch (e) {}
function testNestedProxy() {
    const v331 = {
        ownKeys() {
            return ["c"];
        },
        getOwnPropertyDescriptor() {
            return { configurable: true, enumerable: true };
        },
    };
    var handler = v331;
    const v333 = {};
    let v334;
    try { v334 = new Proxy(v333, handler); } catch (e) {}
    var proxy = v334;
    const v336 = {};
    let v337;
    try { v337 = new Proxy(proxy, v336); } catch (e) {}
    var proxy2 = v337;
    ["c"];
    let v341;
    try { v341 = keys(proxy); } catch (e) {}
    try { v341(); } catch (e) {}
    ["c"];
    let v345;
    try { v345 = keys(proxy2); } catch (e) {}
    try { v345(); } catch (e) {}
}
try { testNestedProxy(); } catch (e) {}
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// [COV] edge counters initialized. Shared memory: shm_id_1162266_0 with 1587369 edges
// V8 is running with experimental features enabled. Stability and security will suffer.
// 
// 
// #
// # Fatal error in ../../src/maglev/maglev-assembler-inl.h, line 777
// # Debug check failed: !allow_allocate() implies builtin == Builtin::kDoubleToI || !BuiltinCanAllocate(builtin).
// #
// #
// #
// #FailureMessage Object: 0x7fa648c35700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x563daee4ba82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x563daee4a2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x563daee3e546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x563daee3dd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x563db095713e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x563db0d227a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x563db08b43eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x563db0862150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x563db085efd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x563db05b55d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x563db05ac7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x563daf02acb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x563db05af588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x563daee4f14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x563daee5a925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x563daee47650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fa6517ebac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fa65187d850]
// Received signal 6
// STDOUT:
// Warning: unknown flag --experimental-wasm-memory64.
// Try --help for options
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: FixupMutator
// EXECUTION TIME: 199ms
