var BUGNUMBER = 715821;
var summary = "Implement __define[GS]etter__ using Object.defineProperty";
print((BUGNUMBER + ": ") + summary);
function s(a10) {
    if (typeof a10 === "undefined") {
        return "<undefined>";
    }
    typeof a10;
    a10 !== null;
    var str = (((("<enumerable: <" + a10.enumerable) + ">, ") + " configurable: <") + a10.configurable) + ">,";
    if (a10.hasOwnProperty("value")) {
        return (((((str + " value: <") + a10.value) + ">,") + " writable: <") + a10.writable) + ">>";
    }
    return (((((str + " get: <") + a10.get) + ">,") + " set: <") + a10.set) + ">>";
}
function checkField(a59, a60, a61) {
    var present = a60.hasOwnProperty(a59);
    a61.hasOwnProperty(a59);
    ((((a59 + " presence mismatch (got ") + s(a60)) + ", expected ") + s(a61)) + ")";
    if (present) {
        a60[a59];
        a61[a59];
        ((((a59 + " value mismatch (got ") + s(a60)) + ", expected ") + s(a61)) + ")";
    }
}
function check(a88, a89, a90) {
    var desc = Object.getOwnPropertyDescriptor(a88, a89);
    typeof desc;
    typeof a90;
    ((("type mismatch (got " + s(desc)) + ", expected ") + s(a90)) + ")";
    desc.hasOwnProperty("get");
    desc.hasOwnProperty("set");
    "bad descriptor: " + s(desc);
    desc.hasOwnProperty("value");
    desc.hasOwnProperty("writable");
    "bad descriptor: " + s(desc);
    desc.hasOwnProperty("get");
    !desc.hasOwnProperty("value");
    "bad descriptor: " + s(desc);
    checkField("get", desc, a90);
    checkField("set", desc, a90);
    checkField("value", desc, a90);
    checkField("writable", desc, a90);
    checkField("enumerable", desc, a90);
    checkField("configurable", desc, a90);
}
function expectTypeError(a140) {
    try {
        a140();
        const v144 = new Error("no error thrown");
        throw v144;
    } catch(e145) {
        e145 instanceof TypeError;
        ("wrong error thrown: got " + e145) + ", not a TypeError";
    }
}
function g1() {
}
var gobj = {};
gobj.__defineGetter__("foo", g1);
check(gobj, "foo", { get: g1, set: undefined, enumerable: true, configurable: true });
function g2() {
}
gobj.__defineGetter__("foo", g2);
check(gobj, "foo", { get: g2, set: undefined, enumerable: true, configurable: true });
function s1() {
}
var sobj = {};
sobj.__defineSetter__("bar", s1);
check(sobj, "bar", { get: undefined, set: s1, enumerable: true, configurable: true });
function s2() {
}
sobj.__defineSetter__("bar", s2);
check(sobj, "bar", { get: undefined, set: s2, enumerable: true, configurable: true });
function g3() {
}
var gsobj = {};
gsobj.__defineGetter__("baz", g3);
check(gsobj, "baz", { get: g3, set: undefined, enumerable: true, configurable: true });
function s3() {
}
gsobj.__defineSetter__("baz", s3);
check(gsobj, "baz", { get: g3, set: s3, enumerable: true, configurable: true });
Object.defineProperty(gsobj, "baz", { enumerable: false });
check(gsobj, "baz", { get: g3, set: s3, enumerable: false, configurable: true });
gsobj.__defineGetter__("baz", g3);
check(gsobj, "baz", { get: g3, set: s3, enumerable: true, configurable: true });
Object.defineProperty(gsobj, "baz", { enumerable: false });
check(gsobj, "baz", { get: g3, set: s3, enumerable: false, configurable: true });
gsobj.__defineSetter__("baz", s3);
check(gsobj, "baz", { get: g3, set: s3, enumerable: true, configurable: true });
Object.defineProperty(gsobj, "baz", { configurable: false });
function f249() {
    gsobj.__defineSetter__("baz", s2);
}
expectTypeError(f249);
function f253() {
    gsobj.__defineSetter__("baz", s3);
}
expectTypeError(f253);
check(gsobj, "baz", { get: g3, set: s3, enumerable: true, configurable: false });
function s4() {
}
var sgobj = {};
sgobj.__defineSetter__("baz", s4);
check(sgobj, "baz", { get: undefined, set: s4, enumerable: true, configurable: true });
function g4() {
}
sgobj.__defineGetter__("baz", g4);
check(sgobj, "baz", { get: g4, set: s4, enumerable: true, configurable: true });
Object.defineProperty(sgobj, "baz", { enumerable: false });
check(sgobj, "baz", { get: g4, set: s4, enumerable: false, configurable: true });
sgobj.__defineSetter__("baz", s4);
check(sgobj, "baz", { get: g4, set: s4, enumerable: true, configurable: true });
Object.defineProperty(sgobj, "baz", { enumerable: false });
check(sgobj, "baz", { get: g4, set: s4, enumerable: false, configurable: true });
sgobj.__defineSetter__("baz", s4);
check(sgobj, "baz", { get: g4, set: s4, enumerable: true, configurable: true });
Object.defineProperty(sgobj, "baz", { configurable: false });
function f317() {
    sgobj.__defineGetter__("baz", g3);
}
expectTypeError(f317);
function f321() {
    sgobj.__defineSetter__("baz", s4);
}
expectTypeError(f321);
check(sgobj, "baz", { get: g4, set: s4, enumerable: true, configurable: false });
function g5() {
}
var gover = { quux: 17 };
check(gover, "quux", { value: 17, writable: true, enumerable: true, configurable: true });
gover.__defineGetter__("quux", g5);
check(gover, "quux", { get: g5, set: undefined, enumerable: true, configurable: true });
function s5() {
}
var sover = { quux: 17 };
check(sover, "quux", { value: 17, writable: true, enumerable: true, configurable: true });
sover.__defineSetter__("quux", s5);
check(sover, "quux", { get: undefined, set: s5, enumerable: true, configurable: true });
function g6() {
}
var gnover = { eit: 17 };
check(gnover, "eit", { value: 17, writable: true, enumerable: true, configurable: true });
Object.defineProperty(gnover, "eit", { writable: false });
check(gnover, "eit", { value: 17, writable: false, enumerable: true, configurable: true });
gnover.__defineGetter__("eit", g6);
check(gnover, "eit", { get: g6, set: undefined, enumerable: true, configurable: true });
function s6() {
}
var snover = { eit: 17 };
check(snover, "eit", { value: 17, writable: true, enumerable: true, configurable: true });
Object.defineProperty(snover, "eit", { writable: false });
check(snover, "eit", { value: 17, writable: false, enumerable: true, configurable: true });
snover.__defineSetter__("eit", s6);
check(snover, "eit", { get: undefined, set: s6, enumerable: true, configurable: true });
function g7() {
}
var gncover = { moo: 17 };
check(gncover, "moo", { value: 17, writable: true, enumerable: true, configurable: true });
Object.defineProperty(gncover, "moo", { configurable: false });
check(gncover, "moo", { value: 17, writable: true, enumerable: true, configurable: false });
function f450() {
    gncover.__defineGetter__("moo", g7);
}
expectTypeError(f450);
check(gncover, "moo", { value: 17, writable: true, enumerable: true, configurable: false });
function s7() {
}
var sncover = { moo: 17 };
check(sncover, "moo", { value: 17, writable: true, enumerable: true, configurable: true });
Object.defineProperty(sncover, "moo", { configurable: false });
check(sncover, "moo", { value: 17, writable: true, enumerable: true, configurable: false });
function f483() {
    sncover.__defineSetter__("moo", s7);
}
expectTypeError(f483);
check(sncover, "moo", { value: 17, writable: true, enumerable: true, configurable: false });
function g8() {
}
var gncwover = { fwoosh: 17 };
check(gncwover, "fwoosh", { value: 17, writable: true, enumerable: true, configurable: true });
Object.defineProperty(gncwover, "fwoosh", { writable: false, configurable: false });
check(gncwover, "fwoosh", { value: 17, writable: false, enumerable: true, configurable: false });
function f517() {
    gncwover.__defineGetter__("fwoosh", g7);
}
expectTypeError(f517);
check(gncwover, "fwoosh", { value: 17, writable: false, enumerable: true, configurable: false });
function s8() {
}
var sncwover = { fwoosh: 17 };
check(sncwover, "fwoosh", { value: 17, writable: true, enumerable: true, configurable: true });
Object.defineProperty(sncwover, "fwoosh", { writable: false, configurable: false });
check(sncwover, "fwoosh", { value: 17, writable: false, enumerable: true, configurable: false });
function f551() {
    sncwover.__defineSetter__("fwoosh", s7);
}
expectTypeError(f551);
check(sncwover, "fwoosh", { value: 17, writable: false, enumerable: true, configurable: false });
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
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
// #FailureMessage Object: 0x7fa9eb1c4700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55b587157a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55b5871562a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55b58714a546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55b587149d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55b588c6313e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55b58902e7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55b588bc03eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55b588b6e150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55b588b6afd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55b5888c15d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55b5888b87e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55b587336cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55b5888bb588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55b58715b14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55b587166925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55b587153650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fa9f3579ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fa9f360b850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 119ms
