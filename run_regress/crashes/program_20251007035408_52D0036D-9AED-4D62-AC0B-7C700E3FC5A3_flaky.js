function f0() {
}
const v3 = -12;
const v4 = { a: 12, r: v3 };
const v6 = -3.376223738644218e+52;
const v8 = { a: v6, r: 3.376223738644218e+52 };
const v10 = -3.408597170995603e+45;
const v12 = { a: v10, r: 3.408597170995603e+45 };
const v14 = -5.649810668774758e+57;
const v16 = { a: v14, r: 5.649810668774758e+57 };
const v18 = -5.958630457660687e+58;
const v20 = { a: v18, r: 5.958630457660687e+58 };
const v23 = -4.0101947976203283e+52;
const v24 = { a: 4.0101947976203283e+52, r: v23 };
const v26 = -2.3094354071336887e+49;
const v28 = { a: v26, r: 2.3094354071336887e+49 };
const v30 = -9.780520248703708e+36;
const v32 = { a: v30, r: 9.780520248703708e+36 };
const v35 = -3.4384203415724334e+29;
const v36 = { a: 3.4384203415724334e+29, r: v35 };
const v39 = -23831217240832;
const v40 = { a: 23831217240832, r: v39 };
const v43 = -6.900928455571621e+41;
const v44 = { a: 6.900928455571621e+41, r: v43 };
const v46 = -2.989612293669302e+53;
const v48 = { a: v46, r: 2.989612293669302e+53 };
const v51 = -1.3673687202925953e+25;
const v52 = { a: 1.3673687202925953e+25, r: v51 };
const v55 = -1568;
const v56 = { a: 1568, r: v55 };
const v59 = -0;
const v60 = { a: 6.246112154090498e+58, r: v59 };
const v62 = -6.484795080223042e+46;
const v64 = { a: v62, r: 0 };
const v67 = -1.3347935685088806e+66;
const v68 = { a: 1.3347935685088806e+66, r: v67 };
const v70 = -9.062069937545024e+24;
const v72 = { a: v70, r: 9.062069937545024e+24 };
const v74 = -3.3550718319169737e+22;
const v76 = { a: v74, r: 0 };
const v78 = -2.0578861010630096e+63;
var data = [v4,v8,v12,v16,v20,v24,v28,v32,v36,v40,v44,v48,v52,v56,v60,v64,v68,v72,v76,{ a: v78, r: 2.0578861010630096e+63 }];
var error_count = 0;
for (let i86 = 0; i86 < data?.length; i86++) {
    var d = data?.[i86];
    var r = -d?.a;
    if (d?.r !== r) {
        const v101 = d?.a;
        let v102;
        try { v102 = v101.toString(16); } catch (e) {}
        const v103 = "Input:    " + v102;
        try { f0(v103); } catch (e) {}
        let v107;
        try { v107 = r.toString(16); } catch (e) {}
        const v108 = "Result:   " + v107;
        try { f0(v108); } catch (e) {}
        const v112 = "Expected: " + d?.r;
        try { f0(v112); } catch (e) {}
        error_count++;
    }
}
if (error_count !== 0) {
    const v120 = ("Finished with " + error_count) + " errors.";
    try { f0(v120); } catch (e) {}
    try { quit(1); } catch (e) {}
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
// #FailureMessage Object: 0x7f18d826e700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x559f2aa20a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x559f2aa1f2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x559f2aa13546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x559f2aa12d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x559f2c52c13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x559f2c8f77a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x559f2c4893eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x559f2c437150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x559f2c433fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x559f2c18a5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x559f2c1817e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x559f2abffcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x559f2c184588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x559f2aa2414f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x559f2aa2f925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x559f2aa1c650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f18e2627ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f18e26b9850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 319ms
