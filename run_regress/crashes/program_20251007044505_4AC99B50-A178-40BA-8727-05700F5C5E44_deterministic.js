function testNonExtensibleStoreFallibleT() {
    var x = [8,0];
    Object.preventExtensions(x);
    x.length = 1;
    x[1] = 4;
    x.length;
    x[0];
}
for (let i14 = 0; i14 < 15; ++i14) {
    testNonExtensibleStoreFallibleT();
}
function testNonExtensibleStoreFallibleV(a22) {
    var x = [8,""];
    Object.preventExtensions(x);
    x.length = 1;
    x[1] = ([true,1])[a22 & 1];
    x.length;
    x[0];
}
for (let i41 = 0; i41 < 15; ++i41) {
    testNonExtensibleStoreFallibleV(i41);
}
function testForInIterationNonExtensibleStoreFallibleT() {
    var x = [8,0];
    Object.preventExtensions(x);
    for (const v55 in x) {
        x.length = 1;
    }
    x[1] = 4;
    x.length;
    x[0];
}
for (let i63 = 0; i63 < 15; ++i63) {
    testForInIterationNonExtensibleStoreFallibleT();
}
function testForInIterationNonExtensibleStoreFallibleV(a71) {
    var x = [8,""];
    Object.preventExtensions(x);
    for (const v78 in x) {
        x.length = 1;
        break;
    }
    x[1] = ([true,1])[a71 & 1];
    x.length;
    x[0];
}
for (let i91 = 0; i91 < 15; ++i91) {
    testForInIterationNonExtensibleStoreFallibleV(i91);
}
function testNonExtensibleArrayPop() {
    var x = [8,0];
    Object.preventExtensions(x);
    x.pop();
    x[1] = 4;
    x.length;
    x[0];
}
for (let i112 = 0; i112 < 15; ++i112) {
    testNonExtensibleArrayPop();
}
function testNonExtensibleArrayPopNonWritable() {
    var x = [8,0];
    Object.preventExtensions(x);
    Object.defineProperty(x, "length", { writable: false });
    try {
        x.pop();
    } catch(e131) {
    }
    for (let i133 = 0; i133 < 100; ++i133) {
        x[1] = 4;
    }
    x.length;
    x[0];
    x[1];
    1 in x;
}
for (let i150 = 0; i150 < 15; ++i150) {
    testNonExtensibleArrayPopNonWritable();
}
function testNonExtensibleArrayShift() {
    var x = [8,0];
    Object.preventExtensions(x);
    x.shift();
    x[1] = 4;
    x.length;
    x[0];
}
for (let i171 = 0; i171 < 15; ++i171) {
    testNonExtensibleArrayShift();
}
function testNonExtensibleArraySplice() {
    var x = [8,0];
    Object.preventExtensions(x);
    x.splice(1, 1);
    x[1] = 4;
    x.length;
    x[0];
}
for (let i194 = 0; i194 < 15; ++i194) {
    testNonExtensibleArraySplice();
}
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
// #FailureMessage Object: 0x7fc62f7fc700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x56425f5b9a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x56425f5b82a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x56425f5ac546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x56425f5abd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5642610c513e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5642614907a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5642610223eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x564260fd0150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x564260fccfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x564260d235d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x564260d1a7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x56425f798cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x564260d1d588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x56425f5bd14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x56425f5c8925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x56425f5b5650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fc645ab0ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fc645b42850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 155ms
