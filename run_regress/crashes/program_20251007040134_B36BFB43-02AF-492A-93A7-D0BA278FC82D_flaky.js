var global = {};
const v3 = { name: "foo" };
var fish = [v3,{ name: "bar" }];
for (let i9 = 0; i9 < fish?.length; i9++) {
    global[fish?.[i9]?.name] = 1;
}
function load() {
    var sum = 0;
    for (let i22 = 0; i22 < fish?.length; i22++) {
        var name = fish?.[i22]?.name;
        sum += global?.[name];
    }
    return sum;
}
try { load(); } catch (e) {}
try { load(); } catch (e) {}
try { load(); } catch (e) {}
try { load(); } catch (e) {}
function store() {
    for (let i38 = 0; i38 < fish?.length; i38++) {
        var name = fish?.[i38]?.name;
        global[name] = 1;
    }
}
try { store(); } catch (e) {}
try { store(); } catch (e) {}
try { store(); } catch (e) {}
try { store(); } catch (e) {}
function store_element(a53, a54) {
    a53[a54] = 0;
}
let v58;
try { v58 = new Array(3); } catch (e) {}
var o1 = v58;
let v61;
try { v61 = new Array(3); } catch (e) {}
var o2 = v61;
o2.o2 = "o2";
let v65;
try { v65 = new Array(3); } catch (e) {}
var o3 = v65;
o3.o3 = "o3";
let v69;
try { v69 = new Array(3); } catch (e) {}
var o4 = v69;
o4.o4 = "o4";
let v73;
try { v73 = new Array(3); } catch (e) {}
var o5 = v73;
o5.o5 = "o5";
try { store_element(o1, 0); } catch (e) {}
try { store_element(o1, 0); } catch (e) {}
try { store_element(o2, 0); } catch (e) {}
try { store_element(o3, 0); } catch (e) {}
try { store_element(o4, 0); } catch (e) {}
try { store_element(o5, 0); } catch (e) {}
function inferrable_store(a89) {
    try { store_element(o5, a89); } catch (e) {}
}
try { inferrable_store(0); } catch (e) {}
try { inferrable_store(0); } catch (e) {}
try { inferrable_store(0); } catch (e) {}
try { inferrable_store(); } catch (e) {}
try { inferrable_store("deopt"); } catch (e) {}
let v101;
try { v101 = isTurboFanned(inferrable_store); } catch (e) {}
if (!v101) {
    try { inferrable_store(); } catch (e) {}
}
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55b2a5909a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55b2a59082a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55b2a58fc546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55b2a58fbd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55b2a741513e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55b2a77e07a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55b2a73723eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55b2a7320150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55b2a731cfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55b2a70735d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55b2a706a7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55b2a5ae8cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55b2a706d588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55b2a590d14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55b2a5918925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55b2a5905650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7ffaef860ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7ffaef8f2850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 131ms
