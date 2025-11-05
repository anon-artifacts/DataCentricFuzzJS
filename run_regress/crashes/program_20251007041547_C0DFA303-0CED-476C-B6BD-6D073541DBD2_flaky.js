function filter(a1) {
    return /^[a-z]$/.test(a1);
}
function printfilteredprops(a5) {
    printprops(a5, filter);
}
function printprops(a9, a10) {
    var s = "{";
    var prependComma = false;
    for (const v15 in a9) {
        if (!a10 || a10(v15)) {
            if (prependComma) {
                s += "\n";
            } else {
                s += "\n";
                prependComma = true;
            }
            s += (("    " + v15) + ": ") + a9[v15];
        }
    }
    if (prependComma) {
        s += "\n}";
    } else {
        s += " }";
    }
    print(s);
}
print("\n==== Let/const globals should not show up in for-in enumeration ====\n");
print("\nBefore x, y, z, w declarations and globals\n");
try {
    print(x);
} catch(e39) {
    print(e39);
}
try {
    print(y);
} catch(e43) {
    print(e43);
}
try {
    print(z);
} catch(e47) {
    print(e47);
}
try {
    print(w);
} catch(e51) {
    print(e51);
}
print(this.x);
print(this.y);
print(this.z);
print(this.w);
printfilteredprops(this);
let x = "let x";
this.y = "this.y";
const z = "const z";
this.w = "this.w";
print("\nAfter let x, this.y, const z, this.w\n");
try {
    print(x);
} catch(e78) {
    print(e78);
}
try {
    print(y);
} catch(e82) {
    print(e82);
}
try {
    print(z);
} catch(e85) {
    print(e85);
}
try {
    print(w);
} catch(e89) {
    print(e89);
}
print(this.x);
print(this.y);
print(this.z);
print(this.w);
printfilteredprops(this);
this.x = "this.x";
let y = "let y";
this.z = "this.z";
const w = "const w";
print("\nAfter this.x, let y, this.z, const w\n");
try {
    print(x);
} catch(e116) {
    print(e116);
}
try {
    print(y);
} catch(e119) {
    print(e119);
}
try {
    print(z);
} catch(e122) {
    print(e122);
}
try {
    print(w);
} catch(e125) {
    print(e125);
}
print(this.x);
print(this.y);
print(this.z);
print(this.w);
printfilteredprops(this);
print("\n==== Attributes on global properties should not be lost with let/const shadowing ====\n");
Object.defineProperty(this, "p", { configurable: false, enumerable: false, writable: false, value: "this.p" });
try {
    print(p);
} catch(e154) {
    print(e154);
}
print(this.p);
printprops(Object.getOwnPropertyDescriptor(this, "p"));
let p = "let p";
try {
    print(p);
} catch(e166) {
    print(e166);
}
print(this.p);
printprops(Object.getOwnPropertyDescriptor(this, "p"));
let r = 0;
print(r);
print(this.r);
r = 1;
print(r);
print(this.r);
Object.defineProperty(this, "r", {});
print(r);
print(this.r);
r = 2;
print(r);
print(this.r);
Object.defineProperty(this, "s", {});
let s = 0;
print(s = 3);
print(this.s);
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// [COV] edge counters initialized. Shared memory: shm_id_1162266_3 with 1587369 edges
// V8 is running with experimental features enabled. Stability and security will suffer.
// 
// 
// #
// # Fatal error in ../../src/maglev/maglev-assembler-inl.h, line 777
// # Debug check failed: !allow_allocate() implies builtin == Builtin::kDoubleToI || !BuiltinCanAllocate(builtin).
// #
// #
// #
// #FailureMessage Object: 0x7f32b8f00700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55738fc8ba82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55738fc8a2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55738fc7e546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55738fc7dd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55739179713e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x557391b627a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5573916f43eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5573916a2150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55739169efd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5573913f55d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5573913ec7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55738fe6acb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5573913ef588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55738fc8f14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55738fc9a925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55738fc87650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f32c1ab6ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f32c1b48850]
// Received signal 6
// STDOUT:
// Warning: unknown flag --experimental-wasm-memory64.
// Try --help for options
// 
// ==== Let/const globals should not show up in for-in enumeration ====
// 
// 
// Before x, y, z, w declarations and globals
// 
// ReferenceError: Cannot access 'x' before initialization
// ReferenceError: Cannot access 'y' before initialization
// ReferenceError: Cannot access 'z' before initialization
// ReferenceError: Cannot access 'w' before initialization
// undefined
// undefined
// undefined
// undefined
// { }
// 
// After let x, this.y, const z, this.w
// 
// let x
// ReferenceError: Cannot access 'y' before initialization
// const z
// ReferenceError: Cannot access 'w' before initialization
// undefined
// this.y
// undefined
// this.w
// {
//     y: this.y
//     w: this.w
// }
// 
// After this.x, let y, this.z, const w
// 
// let x
// let y
// const z
// const w
// this.x
// this.y
// this.z
// this.w
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 146ms
