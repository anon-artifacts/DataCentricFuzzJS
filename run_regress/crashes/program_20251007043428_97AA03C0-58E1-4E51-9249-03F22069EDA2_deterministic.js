console.log("This test checks the behavior of the reduceRight() method on a number of objects.");
function toObject(a4) {
    var o = {};
    for (const v7 in a4) {
        o[v7] = a4[v7];
    }
    o.length = a4.length;
    o.reduceRight = Array.prototype.reduceRight;
    return o;
}
function toUnorderedObject(a14) {
    var o = {};
    var props = [];
    for (const v19 in a14) {
        props.push(v19);
    }
    for (let i24 = props.length - 1; i24 >= 0; i24--) {
        const v31 = a14[props[i24]];
        o[props[i24]] = v31;
    }
    o.length = a14.length;
    o.reduceRight = Array.prototype.reduceRight;
    return o;
}
function f37(a38, a39) {
    return a38 + a39;
}
([0,1,2,3]).reduceRight(f37);
function f47(a48, a49) {
    return a48 + a49;
}
([1,2,3]).reduceRight(f47);
function f56(a57, a58) {
    return a57 + a58;
}
([0,1,2,3]).reduceRight(f56, 4);
function f67(a68, a69) {
    return a68 + a69;
}
([1,2,3]).reduceRight(f67, 4);
function f77(a78, a79) {
    return a78 + a79;
}
toObject([0,1,2,3]).reduceRight(f77);
function f88(a89, a90) {
    return a89 + a90;
}
toObject([1,2,3]).reduceRight(f88);
function f98(a99, a100) {
    return a99 + a100;
}
toObject([0,1,2,3]).reduceRight(f98, 4);
function f110(a111, a112) {
    return a111 + a112;
}
toObject([1,2,3]).reduceRight(f110, 4);
function f121(a122, a123) {
    return a122 + a123;
}
toUnorderedObject([0,1,2,3]).reduceRight(f121);
function f132(a133, a134) {
    return a133 + a134;
}
toUnorderedObject([1,2,3]).reduceRight(f132);
function f142(a143, a144) {
    return a143 + a144;
}
toUnorderedObject([0,1,2,3]).reduceRight(f142, 4);
function f154(a155, a156) {
    return a155 + a156;
}
toUnorderedObject([1,2,3]).reduceRight(f154, 4);
sparseArray = [];
sparseArray[10] = 10;
function f169(a170, a171) {
    return a170 + a171;
}
sparseArray.reduceRight(f169, 0);
function f175(a176, a177) {
    return a176 + a177;
}
toObject(sparseArray).reduceRight(f175, 0);
var callCount = 0;
function f184(a185, a186) {
    callCount++;
}
sparseArray.reduceRight(f184);
callCount = 0;
function f190(a191, a192) {
    callCount++;
}
toObject(sparseArray).reduceRight(f190);
var callCount = 0;
function f198(a199, a200) {
    callCount++;
}
sparseArray.reduceRight(f198, 0);
callCount = 0;
function f205(a206, a207) {
    callCount++;
}
toObject(sparseArray).reduceRight(f205, 0);
callCount = 0;
function f213(a214, a215) {
    callCount++;
}
([0,1,2,3,4]).reduceRight(f213, 0);
callCount = 0;
function f226(a227, a228) {
    callCount++;
}
([0,1,2,3,4]).reduceRight(f226);
callCount = 0;
function f238(a239, a240, a241, a242) {
    let v243 = a242.length;
    v243--;
    callCount++;
    return a239 + a240;
}
([1,2,3,4]).reduceRight(f238, 0);
callCount = 0;
function f255(a256, a257, a258, a259) {
    a259.length = 1;
    callCount++;
    return a256 + a257;
}
([1,2,3,4]).reduceRight(f255, 0);
callCount = 0;
function f271(a272, a273, a274, a275) {
    let v276 = a275.length;
    v276++;
    callCount++;
    return a272 + a273;
}
([1,2,3,4]).reduceRight(f271, 0);
callCount = 0;
function f288(a289, a290, a291, a292) {
    let v293 = a292.length;
    v293--;
    callCount++;
    return a289 + a290;
}
toObject([1,2,3,4]).reduceRight(f288, 0);
callCount = 0;
function f306(a307, a308, a309, a310) {
    let v311 = a310.length;
    v311++;
    callCount++;
    return a307 + a308;
}
toObject([1,2,3,4]).reduceRight(f306, 0);
function f323(a324, a325) {
    return a324.concat(a325);
}
const v327 = [];
([[0,1],[2,3],[4,5]]).reduceRight(f323, v327);
function f339(a340, a341) {
    return a340.concat(a341);
}
const v343 = [];
toObject([[0,1],[2,3],[4,5]]).reduceRight(f339, v343);
function f356(a357, a358, a359) {
    return a357.concat([a359,a358]);
}
const v362 = [];
toObject([0,1,2,3,4,5]).reduceRight(f356, v362);
function f372(a373, a374) {
    return a373.concat(a374);
}
const v376 = [];
toUnorderedObject([[0,1],[2,3],[4,5]]).reduceRight(f372, v376);
function f389(a390, a391, a392) {
    return a390.concat([a392,a391]);
}
const v395 = [];
toUnorderedObject([0,1,2,3,4,5]).reduceRight(f389, v395);
function f405(a406, a407, a408) {
    return a406.concat([a408,a407]);
}
const v411 = [];
([0,1,2,3,4,5]).reduceRight(f405, v411);
function f420() {
    'use strict';
    return this;
}
([2,3]).reduceRight(f420);
const v427 = -1;
var negativeLengthObject = { length: v427, 0: 1, 1: 2 };
function f432(a433, a434) {
    return a433 + a434;
}
Array.prototype.reduceRight.call(negativeLengthObject, f432, 100);
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
// #FailureMessage Object: 0x7fb870f36700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5574b0453a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5574b04522a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5574b0446546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5574b0445d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5574b1f5f13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5574b232a7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5574b1ebc3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5574b1e6a150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5574b1e66fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5574b1bbd5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5574b1bb47e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5574b0632cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5574b1bb7588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5574b045714f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5574b0462925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5574b044f650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fb87faf8ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fb87fb8a850]
// Received signal 6
// STDOUT:
// This test checks the behavior of the reduceRight() method on a number of objects.
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 272ms
