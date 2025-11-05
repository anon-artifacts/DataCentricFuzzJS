function CreateConstructableProxy(a1) {
    function f3() {
    }
    const v4 = new Proxy(f3, a1);
    return v4;
}
function f5() {
    var prototype = { x: 1 };
    var log = [];
    const v15 = {
        get(a12) {
            log.push("get trap");
            return prototype;
        },
    };
    var proxy = CreateConstructableProxy(v15);
    var o = Reflect.construct(Number, [100], proxy);
    ["get trap"];
    Object.getPrototypeOf(o) === prototype;
    Number.prototype.valueOf.call(o);
}
f5();
function f34() {
    var prototype = { x: 1 };
    var log = [];
    const v45 = {
        get(a41) {
            log.push("get trap");
            return 10;
        },
    };
    var proxy = CreateConstructableProxy(v45);
    var o = Reflect.construct(Number, [100], proxy);
    ["get trap"];
    Object.getPrototypeOf(o) === Number.prototype;
    Number.prototype.valueOf.call(o);
}
f34();
function f65() {
    var prototype = { x: 1 };
    var log = [];
    const v75 = {
        get(a72) {
            log.push("get trap");
            return prototype;
        },
    };
    var proxy = CreateConstructableProxy(v75);
    var o = Reflect.construct(Function, ["return 1000"], proxy);
    ["get trap"];
    Object.getPrototypeOf(o) === prototype;
    o();
}
f65();
function f92() {
    var prototype = { x: 1 };
    var log = [];
    const v102 = {
        get(a99) {
            log.push("get trap");
            return prototype;
        },
    };
    var proxy = CreateConstructableProxy(v102);
    var o = Reflect.construct(Array, [1,2,3], proxy);
    ["get trap"];
    Object.getPrototypeOf(o) === prototype;
    [1,2,3];
}
f92();
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
// #FailureMessage Object: 0x7f8223610700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55f92758da82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55f92758c2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55f927580546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55f92757fd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55f92909913e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55f9294647a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55f928ff63eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55f928fa4150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55f928fa0fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55f928cf75d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55f928cee7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55f92776ccb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55f928cf1588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55f92759114f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55f92759c925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55f927589650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f822f9cdac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f822fa5f850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 116ms
