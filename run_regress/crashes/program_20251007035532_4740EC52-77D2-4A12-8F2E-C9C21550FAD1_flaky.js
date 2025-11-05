var obj = {};
function strictNestedAssignShadowVar(a3) {
    'use strict';
    function inner() {
        var p = 12;
        function innermost() {
            p = 1776;
            return 12;
        }
        let v10;
        try { v10 = innermost(); } catch (e) {}
        return v10;
    }
    return arguments;
}
let v12;
try { v12 = strictNestedAssignShadowVar(); } catch (e) {}
const v13 = [];
try { arraysEqual(v12, v13); } catch (e) {}
let v18;
try { v18 = strictNestedAssignShadowVar(99); } catch (e) {}
const v20 = [99];
try { arraysEqual(v18, v20); } catch (e) {}
let v24;
try { v24 = strictNestedAssignShadowVar(""); } catch (e) {}
const v26 = [""];
try { arraysEqual(v24, v26); } catch (e) {}
let v29;
try { v29 = strictNestedAssignShadowVar(obj); } catch (e) {}
const v30 = [obj];
try { arraysEqual(v29, v30); } catch (e) {}
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
// #FailureMessage Object: 0x7f78ec915700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x555a22818a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x555a228172a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x555a2280b546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x555a2280ad95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x555a2432413e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x555a246ef7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x555a242813eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x555a2422f150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x555a2422bfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x555a23f825d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x555a23f797e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x555a229f7cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x555a23f7c588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x555a2281c14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x555a22827925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x555a22814650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f78facd6ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f78fad68850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 185ms
