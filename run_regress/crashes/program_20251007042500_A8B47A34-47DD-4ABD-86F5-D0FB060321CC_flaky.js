function f0() {
}
const v2 = -9.547114834453201e+64;
const v5 = -3.488280990584876e+112;
const v6 = { a: v2, b: 0, r: v5 };
const v8 = -3919762710152528;
const v11 = -1.3209574201699768e+82;
const v12 = { a: v8, b: 208, r: v11 };
const v14 = -1.180326490087838e+50;
const v17 = -1.3934835639084942e+71;
const v18 = { a: v14, b: 64, r: v17 };
const v21 = -0;
const v23 = { a: 1.6471443915745327e+62, b: v21, r: 0 };
const v26 = -0;
const v28 = { a: 0, b: v26, r: 0 };
const v31 = -0;
const v33 = { a: 4.466291845731371e+19, b: v31, r: 174464525223881664 };
const v35 = -7.570136182108704e+23;
const v37 = -0;
const v39 = -0;
const v40 = { a: v35, b: v37, r: v39 };
const v42 = -2.156358348381832e+61;
const v44 = -0;
const v46 = -2.1058186995916328e+58;
const v47 = { a: v42, b: v44, r: v46 };
const v49 = -32608800;
const v51 = -0;
const v53 = -0;
const v54 = { a: v49, b: v51, r: v53 };
const v57 = -0;
const v59 = { a: 64, b: v57, r: 16 };
const v61 = -3936;
const v64 = -3.351781314171244e+41;
const v65 = { a: v61, b: 0, r: v64 };
const v67 = -112;
const v69 = -128;
const v71 = -0;
const v72 = { a: v67, b: v69, r: v71 };
const v74 = -7.93437689585123e+29;
const v77 = -0;
const v78 = { a: v74, b: 0, r: v77 };
const v82 = { a: 2.5369563857495137e+76, b: 0, r: 4.059130217199222e+77 };
const v84 = -7.571544252770396e+70;
const v87 = -0;
const v88 = { a: v84, b: 0, r: v87 };
const v92 = { a: 35172624, b: 0, r: 0 };
const v95 = -2144;
const v97 = { a: 1.1338122907315064e+81, b: v95, r: 0 };
const v101 = { a: 2.4178712744806056e+21, b: 0, r: 1.1692108048896537e+46 };
const v105 = { a: 3.3415614908706494e+80, b: 0, r: 4.277198708314431e+82 };
const v107 = -4379328;
const v110 = -6.33865002179793e+82;
var data = [v6,v12,v18,v23,v28,v33,v40,v47,v54,v59,v65,v72,v78,v82,v88,v92,v97,v101,v105,{ a: v107, b: 0, r: v110 }];
var error_count = 0;
for (let i117 = 0; i117 < data?.length; i117++) {
    var d = data?.[i117];
    var r = d?.a << d?.b;
    if (d?.r !== r) {
        const v133 = d?.a;
        let v134;
        try { v134 = v133.toString(16); } catch (e) {}
        const v135 = "Input A:  " + v134;
        try { f0(v135); } catch (e) {}
        const v139 = d?.b;
        let v140;
        try { v140 = v139.toString(16); } catch (e) {}
        const v141 = "Input B:  " + v140;
        try { f0(v141); } catch (e) {}
        let v145;
        try { v145 = r.toString(16); } catch (e) {}
        const v146 = "Result:   " + v145;
        try { f0(v146); } catch (e) {}
        const v150 = "Expected: " + d?.r;
        try { f0(v150); } catch (e) {}
        try { f0("Op: <<"); } catch (e) {}
        error_count++;
    }
}
if (error_count !== 0) {
    const v160 = ("Finished with " + error_count) + " errors.";
    try { f0(v160); } catch (e) {}
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
// #FailureMessage Object: 0x7ff331ff9700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55f77a12aa82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55f77a1292a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55f77a11d546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55f77a11cd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55f77bc3613e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55f77c0017a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55f77bb933eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55f77bb41150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55f77bb3dfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55f77b8945d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55f77b88b7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55f77a309cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55f77b88e588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55f77a12e14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55f77a139925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55f77a126650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7ff3441e4ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7ff344276850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 131ms
