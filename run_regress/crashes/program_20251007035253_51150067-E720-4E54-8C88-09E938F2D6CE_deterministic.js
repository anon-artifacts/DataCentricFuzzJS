function pow42() {
    let v4;
    try { v4 = Math.pow(2.1, 42); } catch (e) {}
    let v6;
    try { v6 = isFinalTier(); } catch (e) {}
    return { value: v4, ftl: v6 };
}
function build42AsDouble() {
    function opaqueAdd(a10, a11) {
        return a10 + a11;
    }
    const v15 = 42 - 0.123;
    let v17;
    try { v17 = opaqueAdd(v15, 0.123); } catch (e) {}
    return v17;
}
let v18;
try { v18 = build42AsDouble(); } catch (e) {}
var double42 = v18;
if (double42 !== 42) {
    let v24;
    try { v24 = new Error("42 (as double) should be === to 42 (as int)"); } catch (e) {}
    throw v24;
}
function powDouble42() {
    let v28;
    try { v28 = Math.pow(2.1, double42); } catch (e) {}
    let v30;
    try { v30 = isFinalTier(); } catch (e) {}
    return { value: v28, ftl: v30 };
}
function clobber() {
}
try { noInline(clobber); } catch (e) {}
function pow42NoConstantFolding() {
    var obj = { x: 2.1, y: 42 };
    try { clobber(obj); } catch (e) {}
    const v41 = obj?.x;
    const v42 = obj?.y;
    let v44;
    try { v44 = Math.pow(v41, v42); } catch (e) {}
    let v46;
    try { v46 = isFinalTier(); } catch (e) {}
    return { value: v44, ftl: v46 };
}
function powDouble42NoConstantFolding() {
    var obj = { x: 2.1, y: double42 };
    try { clobber(obj); } catch (e) {}
    const v53 = obj?.x;
    const v54 = obj?.y;
    let v56;
    try { v56 = Math.pow(v53, v54); } catch (e) {}
    let v58;
    try { v58 = isFinalTier(); } catch (e) {}
    return { value: v56, ftl: v58 };
}
const v60 = {};
const v61 = {};
const v62 = {};
var results = { jit: v60, dfg: v61, ftl: v62 };
var funs = [["pow42",pow42],["powDouble42",powDouble42],["pow42NoConstantFolding",pow42NoConstantFolding],["powDouble42NoConstantFolding",powDouble42NoConstantFolding]];
var tiers = ["jit","dfg","ftl"];
for (let i81 = 0; i81 < 100000; ++i81) {
    for (const v87 in funs) {
        var name = funs?.[v87]?.[0];
        var fun = funs?.[v87]?.[1];
        let v94;
        try { v94 = fun(); } catch (e) {}
        var result = v94;
        if (result?.ftl) {
            const v97 = result?.value;
            const t71 = results?.["ftl"];
            t71[name] = v97;
        } else {
            let v101;
            try { v101 = numberOfDFGCompiles(fun); } catch (e) {}
            if (v101 > 0) {
                const v104 = result?.value;
                const t78 = results?.["dfg"];
                t78[name] = v104;
            } else {
                const v107 = result?.value;
                const t82 = results?.["jit"];
                t82[name] = v107;
            }
        }
    }
}
var errors = [];
var valuesFor = {};
for (const v114 in tiers) {
    var tier = tiers?.[v114];
    var result = results?.[tier];
    let v120;
    try { v120 = Object.keys(result); } catch (e) {}
    if (v120?.length === 0) {
        continue;
    }
    for (const v124 in funs) {
        var name = funs?.[v124]?.[0];
        if (!(name in result)) {
            const v132 = (name + " was not compiled to ") + tier;
            try { errors.push(v132); } catch (e) {}
        } else {
            if (!(name in valuesFor)) {
                const v136 = result?.[name];
                const v137 = [tier];
                valuesFor[name] = { value: v136, tiers: v137 };
            } else {
                if (result?.[name] !== valuesFor?.[name]?.value) {
                    const v161 = ((((((((name + " has different results in ") + tier) + " (") + result?.[name]) + ") and ") + valuesFor?.[name]?.tiers) + " (") + valuesFor?.[name]?.value) + ")";
                    try { errors.push(v161); } catch (e) {}
                } else {
                    const v164 = valuesFor?.[name]?.tiers;
                    try { v164.push(tier); } catch (e) {}
                }
            }
        }
    }
}
var reference = funs?.[0]?.[0];
var result = valuesFor?.[reference]?.value;
for (const v172 in funs) {
    var name = funs?.[v172]?.[0];
    if (valuesFor?.[name]?.value !== result) {
        const v191 = ((((((name + " (") + valuesFor?.[name]?.value) + ") and ") + reference) + " (") + result) + ") have different results";
        try { errors.push(v191); } catch (e) {}
    }
}
if (errors?.length > 0) {
    let v198;
    try { v198 = errors.join("\n"); } catch (e) {}
    let v199;
    try { v199 = new Error(v198); } catch (e) {}
    throw v199;
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
// #FailureMessage Object: 0x7f5884393700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x56101130ca82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x56101130b2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5610112ff546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5610112fed95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x561012e1813e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5610131e37a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x561012d753eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x561012d23150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x561012d1ffd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x561012a765d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x561012a6d7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5610114ebcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x561012a70588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x56101131014f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x56101131b925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x561011308650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f588cf49ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f588cfdb850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 254ms
