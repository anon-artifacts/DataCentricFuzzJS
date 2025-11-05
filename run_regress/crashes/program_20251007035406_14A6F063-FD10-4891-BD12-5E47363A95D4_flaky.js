const v0 = /this/;
const v1 = /this/g;
const v2 = /(t)his/;
const v6 = new String("this is a string.");
const v7 = {
    re: v0,
    reg: v1,
    rep: v2,
    str: "this is a string.",
    strObject: v6,
};
var x = v7;
var str = "this is a sting";
var result = str.match(x.re);
var result = str.replace(x.re, null);
var result = str.split(x.re, 1);
var result = str.search(x.re);
const v25 = x.re;
var result = x.str.match(v25);
const v29 = x.re;
var result = x.str.replace(v29, null);
const v34 = x.re;
var result = x.str.split(v34, 1);
const v39 = x.re;
var result = x.str.search(v39);
const v43 = x.re;
var result = x.strObject.match(v43);
const v47 = x.re;
var result = x.strObject.replace(v47, null);
const v52 = x.re;
var result = x.strObject.split(v52, 1);
const v57 = x.re;
var result = x.strObject.search(v57);
const v61 = x.strObject;
const v62 = /forceNoMatch/;
var result = String.prototype.replace.call(v61, v62, "");
const v68 = x.str;
var result = x.str.replace(v68, "I");
const v73 = x.str;
var result = x.re.exec(v73);
const v77 = x.str;
var result = x.str.split(v77, 1);
const v82 = x.strObject;
var result = x.strObject.replace(v82, "I");
const v87 = x.strObject;
var result = x.re.exec(v87);
const v91 = x.strObject;
var result = x.strObject.split(v91, 1);
x.reg.exec("_this_");
print(5, x.reg.lastIndex, "wrong x.reg.lastIndex");
("this").match(x.rep);
print("t", RegExp.$1, "RegExp.$1 in local context wasn't updated to the capture group");
var result = ("this").match(x.re);
var expected = Array;
print(expected, result.constructor, "The result should be created in local context");
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
// #FailureMessage Object: 0x7f9ffca09700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5569a6ceea82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5569a6ced2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5569a6ce1546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5569a6ce0d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5569a87fa13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5569a8bc57a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5569a87573eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5569a8705150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5569a8701fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5569a84585d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5569a844f7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5569a6ecdcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5569a8452588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5569a6cf214f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5569a6cfd925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5569a6cea650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fa008dc6ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fa008e58850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 211ms
