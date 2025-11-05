function f0() {
}
let count = 0;
const v4 = {};
const v30 = {
    defineProperty(a6, a7, a8) {
        a8.enumerable;
        a8.configurable;
        if ("set" in a8) {
            a8.set;
            const v18 = Object.prototype;
            try { v18.__defineSetter__(); } catch (e) {}
        } else {
            a8.get;
            const v22 = Object.prototype;
            try { v22.__defineGetter__(); } catch (e) {}
        }
        Object.keys(a8).length;
        count++;
        return true;
    },
};
const v31 = new Proxy(v4, v30);
let verifyProxy = v31;
for (const v39 of [Object.prototype.__defineGetter__,Object.prototype.__defineSetter__]) {
    for (const v43 of [,null]) {
        const v44 = () => {
            let v46;
            try { v46 = v39.call(v43, "x", v39); } catch (e) {}
            return v46;
        };
        v44();
    }
    const v49 = {};
    const v50 = [];
    const v51 = {};
    const v53 = new Proxy(v51, {});
    let nonCallable = [v49,v50,v53];
    for (const v56 of nonCallable) {
        const v57 = () => {
            let v59;
            try { v59 = v39.call(verifyProxy, "x", v56); } catch (e) {}
            return v59;
        };
        v57();
    }
    const v63 = Symbol.toPrimitive;
    const v72 = {
        [v63](a65) {
            return {};
        },
        valueOf() {
            throw "wrongly invoked";
        },
        toString() {
            throw "wrongly invoked";
        },
    };
    let key = v72;
    const v74 = () => {
        let v75;
        try { v75 = v39.call(verifyProxy, key, v39); } catch (e) {}
        return v75;
    };
    v74();
    const v78 = Symbol.toPrimitive;
    const v87 = {
        [v78](a80) {
            return "x";
        },
        valueOf() {
            throw "wrongly invoked";
        },
        toString() {
            throw "wrongly invoked";
        },
    };
    key = v87;
    v39.call(verifyProxy, key, v39);
    const v90 = Symbol.toPrimitive;
    const v95 = {
        [v90]: undefined,
        valueOf() {
            throw "wrongly invoked";
        },
        toString() {
            return "x";
        },
    };
    key = v95;
    v39.call(verifyProxy, key, v39);
    v39.call(verifyProxy, "x", v39);
    let obj = {};
    v39.call(obj, "x", v39);
    let descriptor = Object.getOwnPropertyDescriptor(obj, "x");
    descriptor.enumerable;
    descriptor.configurable;
    if (v39 == Object.prototype.__defineSetter__) {
        descriptor.get;
        descriptor.set;
    } else {
        descriptor.get;
        descriptor.set;
    }
    Object.keys(descriptor).length;
}
f0(0, 0);
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
// #FailureMessage Object: 0x7f413e4b8700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x56203d3e9a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x56203d3e82a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x56203d3dc546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x56203d3dbd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x56203eef513e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x56203f2c07a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x56203ee523eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x56203ee00150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x56203edfcfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x56203eb535d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x56203eb4a7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x56203d5c8cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x56203eb4d588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x56203d3ed14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x56203d3f8925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x56203d3e5650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f4148070ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f4148102850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 151ms
