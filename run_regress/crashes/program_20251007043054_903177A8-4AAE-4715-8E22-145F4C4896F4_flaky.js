try {
    function* f1() {
        yield 1;
        yield 2;
    }
    let v5;
    try { v5 = f1(); } catch (e) {}
    var it = v5;
    try { it.return(3); } catch (e) {}
    try { it.return(Math); } catch (e) {}
    try { it.return(); } catch (e) {}
    let v17;
    try { v17 = f1(); } catch (e) {}
    it = v17;
    try { it.return(null); } catch (e) {}
    function* f2() {
        try {
            yield 1;
            yield 2;
        } finally {
            return 9;
        }
    }
    let v29;
    try { v29 = f2(); } catch (e) {}
    it = v29;
    try { it.return(3); } catch (e) {}
    function* f3() {
        try {
            try {
                yield 1;
                yield 2;
            } finally {
                yield 3;
            }
        } finally {
            yield 4;
        }
    }
    let v44;
    try { v44 = f3(); } catch (e) {}
    it = v44;
    try { it.return(9); } catch (e) {}
    function* f4() {
        try {
            yield 1;
            yield 2;
        } finally {
            throw 3;
        }
    }
    let v59;
    try { v59 = f4(); } catch (e) {}
    it = v59;
    const v61 = () => {
        let v63;
        try { v63 = it.return(8); } catch (e) {}
        return v63;
    };
    try { v61(); } catch (e) {}
    function* f5() {
    }
    let v67;
    try { v67 = f5(); } catch (e) {}
    it = v67;
    try { it.return(3); } catch (e) {}
    function* f6() {
        try {
            yield 1;
            yield 2;
        } finally {
            try {
                return 9;
            } finally {
                yield 3;
            }
        }
    }
    let v80;
    try { v80 = f6(); } catch (e) {}
    it = v80;
    try { it.return(5); } catch (e) {}
    function* f7() {
        try {
            yield 1;
            yield 2;
        } finally {
            try {
                yield 3;
            } finally {
                yield 4;
            }
        }
    }
    let v96;
    try { v96 = f7(); } catch (e) {}
    it = v96;
    try { it.return(5); } catch (e) {}
    try { it.return(6); } catch (e) {}
    function* f8() {
        try {
            yield 1;
            yield 2;
        } finally {
            yield 3;
        }
    }
    let v114;
    try { v114 = f8(); } catch (e) {}
    it = v114;
    try { it.return(5); } catch (e) {}
    const v120 = () => {
        let v122;
        try { v122 = it.throw(4); } catch (e) {}
        return v122;
    };
    try { v120(); } catch (e) {}
    function* f9() {
        try {
            yield 1;
            yield 2;
        } finally {
            try { it.return(4); } catch (e) {}
            yield 3;
        }
    }
    let v134;
    try { v134 = f9(); } catch (e) {}
    it = v134;
    const v136 = () => {
        let v138;
        try { v138 = it.return(5); } catch (e) {}
        return v138;
    };
    try { v136(); } catch (e) {}
    function* f10() {
        try {
            yield 1;
        } finally {
            yield 2;
        }
    }
    let v146;
    try { v146 = f10(); } catch (e) {}
    it = v146;
    const v149 = -1;
    try { it.return(v149); } catch (e) {}
    const v154 = -2;
    try { it.return(v154); } catch (e) {}
    -2;
    function* f11() {
        try {
            try {
                yield 1;
            } finally {
                throw 2;
            }
        } catch(e163) {
            yield e163;
        } finally {
            yield 3;
        }
    }
    let v167;
    try { v167 = f11(); } catch (e) {}
    it = v167;
    try { it.return(9); } catch (e) {}
    throw "done";
} catch(e175) {
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
// #FailureMessage Object: 0x7f295d1db700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5594ef6bda82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5594ef6bc2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5594ef6b0546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5594ef6afd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5594f11c913e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5594f15947a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5594f11263eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5594f10d4150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5594f10d0fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5594f0e275d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5594f0e1e7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5594ef89ccb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5594f0e21588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5594ef6c114f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5594ef6cc925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5594ef6b9650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f2968596ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f2968628850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 158ms
