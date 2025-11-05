function pow42() {
    const v3 = 2.1 ** 42;
    let v5;
    try { v5 = isFinalTier(); } catch (e) {}
    return { value: v3, ftl: v5 };
}
function build42AsDouble() {
    function opaqueAdd(a9, a10) {
        return a9 + a10;
    }
    const v14 = 42 - 0.123;
    let v16;
    try { v16 = opaqueAdd(v14, 0.123); } catch (e) {}
    return v16;
}
let v17;
try { v17 = build42AsDouble(); } catch (e) {}
var double42 = v17;
if (double42 !== 42) {
    let v23;
    try { v23 = new Error("42 (as double) should be === to 42 (as int)"); } catch (e) {}
    throw v23;
}
function powDouble42() {
    const v26 = 2.1 ** double42;
    let v28;
    try { v28 = isFinalTier(); } catch (e) {}
    return { value: v26, ftl: v28 };
}
function clobber() {
}
try { noInline(clobber); } catch (e) {}
function pow42NoConstantFolding() {
    var obj = { x: 2.1, y: 42 };
    try { clobber(obj); } catch (e) {}
    const v41 = obj?.x ** obj?.y;
    let v43;
    try { v43 = isFinalTier(); } catch (e) {}
    return { value: v41, ftl: v43 };
}
function powDouble42NoConstantFolding() {
    var obj = { x: 2.1, y: double42 };
    try { clobber(obj); } catch (e) {}
    const v52 = obj?.x ** obj?.y;
    let v54;
    try { v54 = isFinalTier(); } catch (e) {}
    return { value: v52, ftl: v54 };
}
const v56 = {};
const v57 = {};
const v58 = {};
var results = { jit: v56, dfg: v57, ftl: v58 };
var funs = [["pow42",pow42],["powDouble42",powDouble42],["pow42NoConstantFolding",pow42NoConstantFolding],["powDouble42NoConstantFolding",powDouble42NoConstantFolding]];
var tiers = ["jit","dfg","ftl"];
for (let i77 = 0; i77 < 100000; ++i77) {
    for (const v83 in funs) {
        var name = funs?.[v83]?.[0];
        var fun = funs?.[v83]?.[1];
        let v90;
        try { v90 = fun(); } catch (e) {}
        var result = v90;
        if (result?.ftl) {
            const v93 = result?.value;
            const t63 = results?.["ftl"];
            t63[name] = v93;
        } else {
            let v97;
            try { v97 = numberOfDFGCompiles(fun); } catch (e) {}
            if (v97 > 0) {
                const v100 = result?.value;
                const t70 = results?.["dfg"];
                t70[name] = v100;
            } else {
                const v103 = result?.value;
                const t74 = results?.["jit"];
                t74[name] = v103;
            }
        }
    }
}
var errors = [];
var valuesFor = {};
for (const v110 in tiers) {
    var tier = tiers?.[v110];
    var result = results?.[tier];
    let v116;
    try { v116 = Object.keys(result); } catch (e) {}
    if (v116?.length === 0) {
        continue;
    }
    for (const v120 in funs) {
        var name = funs?.[v120]?.[0];
        if (!(name in result)) {
            const v128 = (name + " was not compiled to ") + tier;
            try { errors.push(v128); } catch (e) {}
        } else {
            if (!(name in valuesFor)) {
                const v132 = result?.[name];
                const v133 = [tier];
                valuesFor[name] = { value: v132, tiers: v133 };
            } else {
                if (result?.[name] !== valuesFor?.[name]?.value) {
                    const v157 = ((((((((name + " has different results in ") + tier) + " (") + result?.[name]) + ") and ") + valuesFor?.[name]?.tiers) + " (") + valuesFor?.[name]?.value) + ")";
                    try { errors.push(v157); } catch (e) {}
                } else {
                    const v160 = valuesFor?.[name]?.tiers;
                    try { v160.push(tier); } catch (e) {}
                }
            }
        }
    }
}
var reference = funs?.[0]?.[0];
var result = valuesFor?.[reference]?.value;
for (const v168 in funs) {
    var name = funs?.[v168]?.[0];
    if (valuesFor?.[name]?.value !== result) {
        const v187 = ((((((name + " (") + valuesFor?.[name]?.value) + ") and ") + reference) + " (") + result) + ") have different results";
        try { errors.push(v187); } catch (e) {}
    }
}
if (errors?.length > 0) {
    let v194;
    try { v194 = errors.join("\n"); } catch (e) {}
    let v195;
    try { v195 = new Error(v194); } catch (e) {}
    throw v195;
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
// #FailureMessage Object: 0x7f01297f8700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x56432370ba82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x56432370a2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5643236fe546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5643236fdd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x56432521713e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5643255e27a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5643251743eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x564325122150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x56432511efd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x564324e755d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x564324e6c7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5643238eacb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x564324e6f588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x56432370f14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x56432371a925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x564323707650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f0159f83ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f015a015850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 169ms
