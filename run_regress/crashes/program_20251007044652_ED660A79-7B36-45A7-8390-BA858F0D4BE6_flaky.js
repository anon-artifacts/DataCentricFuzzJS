var target = {};
var configurable_desc = { value: 123, configurable: true, writable: true, enumerable: false };
Object.defineProperty(target, "configurable", configurable_desc);
var nonconfigurable_desc = { value: 234, configurable: false, writable: false, enumerable: true };
Object.defineProperty(target, "nonconfigurable", nonconfigurable_desc);
var proxied_desc = { value: 345, configurable: true };
function f23(a24, a25) {
    if (a25 === "proxied") {
        return proxied_desc;
    }
    if (a25 === "return_null") {
        return null;
    }
    return Object.getOwnPropertyDescriptor(a24, a25);
}
var handler = { getOwnPropertyDescriptor: f23 };
const v35 = new Proxy(target, handler);
var proxy = v35;
const v38 = new Proxy(target, {});
var proxy_without_handler = v38;
Object.getOwnPropertyDescriptor(proxy, "configurable");
Object.getOwnPropertyDescriptor(proxy, "nonconfigurable");
const v44 = proxied_desc.value;
const v45 = proxied_desc.configurable;
const v48 = { value: v44, configurable: v45, enumerable: false, writable: false };
Object.getOwnPropertyDescriptor(proxy, "proxied");
Object.getOwnPropertyDescriptor(proxy_without_handler, "configurable");
Object.getOwnPropertyDescriptor(proxy_without_handler, "nonconfigurable");
handler.getOwnPropertyDescriptor = undefined;
Object.getOwnPropertyDescriptor(proxy, "configurable");
function f59(a60, a61) {
    return undefined;
}
handler.getOwnPropertyDescriptor = f59;
Object.getOwnPropertyDescriptor(proxy, "configurable");
function f67(a68, a69) {
    return { value: 234, configurable: false, enumerable: true };
}
handler.getOwnPropertyDescriptor = f67;
Object.getOwnPropertyDescriptor(proxy, "nonconfigurable").configurable;
Object.seal(target);
function f81(a82, a83) {
    return undefined;
}
handler.getOwnPropertyDescriptor = f81;
Object.getOwnPropertyDescriptor(proxy, "nonexistent");
var existent_desc = { value: "yes" };
function f93() {
    return existent_desc;
}
handler.getOwnPropertyDescriptor = f93;
const v99 = { value: "yes", writable: false, enumerable: false, configurable: false };
try { Object.getOwnPropertyDescriptor(proxy, "configurable"); } catch (e) {}
handler.getOwnPropertyDescriptor = {};
function f104() {
    throw "ball";
}
handler.getOwnPropertyDescriptor = f104;
function f107() {
    return 1;
}
handler.getOwnPropertyDescriptor = f107;
function f110(a111, a112) {
    return { value: 456, configurable: true, writable: true };
}
handler.getOwnPropertyDescriptor = f110;
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
// #FailureMessage Object: 0x7f6e2ea52700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55fea0872a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55fea08712a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55fea0865546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55fea0864d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55fea237e13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55fea27497a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55fea22db3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55fea2289150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55fea2285fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55fea1fdc5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55fea1fd37e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55fea0a51cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55fea1fd6588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55fea087614f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55fea0881925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55fea086e650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f6e3960cac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f6e3969e850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 109ms
