function Obj1() {
    this[4] = 2;
    this.y = 2;
    this.w = 5;
}
const t5 = Obj1.prototype;
t5.x = 3;
function Obj2() {
    this[5] = 2;
    this.y = 2;
    this.x = 1;
}
const t12 = Obj2.prototype;
t12.x = 3;
const t14 = Obj2.prototype;
t14.z = 4;
function hasOwnUnchanged(a21) {
    let result = "";
    for (const v24 in a21) {
        if (a21.hasOwnProperty(v24)) {
            result += `own: ${v24}, `;
        } else {
            result += `not: ${v24}, `;
        }
    }
    return result;
}
console.log("hasOwnUnchanged:");
const v31 = new Obj1();
console.log(hasOwnUnchanged(v31));
const v34 = new Obj2();
console.log(hasOwnUnchanged(v34));
const v37 = new Obj1();
console.log(hasOwnUnchanged(v37));
const v40 = new Obj2();
console.log(hasOwnUnchanged(v40));
function hasOwnDifferentObj(a44, a45) {
    let result = "";
    for (const v48 in a44) {
        if (a45.hasOwnProperty(v48)) {
            result += `own: ${v48}, `;
        } else {
            result += `not: ${v48}, `;
        }
    }
    return result;
}
console.log("hasOwnDifferentObj:");
const v54 = new Obj2();
const v55 = new Obj1();
console.log(hasOwnDifferentObj(v54, v55));
const v58 = new Obj1();
const v59 = new Obj2();
console.log(hasOwnDifferentObj(v58, v59));
const v62 = new Obj1();
const v63 = new Obj1();
console.log(hasOwnDifferentObj(v62, v63));
const v66 = new Obj2();
const v67 = new Obj2();
console.log(hasOwnDifferentObj(v66, v67));
const v70 = new Obj1();
const v71 = new Obj2();
console.log(hasOwnDifferentObj(v70, v71));
const v74 = new Obj2();
const v75 = new Obj1();
console.log(hasOwnDifferentObj(v74, v75));
function hasOwnModifyLate(a79) {
    let result = "";
    for (const v82 in a79) {
        if (a79.hasOwnProperty(v82)) {
            result += `own: ${v82}, `;
        } else {
            result += `not: ${v82}, `;
        }
        a79.x = 1;
    }
    return result;
}
console.log("hasOwnModifyLate:");
const v89 = new Obj1();
console.log(hasOwnModifyLate(v89));
const v92 = new Obj2();
console.log(hasOwnModifyLate(v92));
const v95 = new Obj1();
console.log(hasOwnModifyLate(v95));
const v98 = new Obj2();
console.log(hasOwnModifyLate(v98));
function hasOwnModifyEarly(a102) {
    let result = "";
    for (const v105 in a102) {
        a102.x = 1;
        if (a102.hasOwnProperty(v105)) {
            result += `own: ${v105}, `;
        } else {
            result += `not: ${v105}, `;
        }
    }
    return result;
}
console.log("hasOwnModifyEarly:");
const v112 = new Obj1();
console.log(hasOwnModifyEarly(v112));
const v115 = new Obj2();
console.log(hasOwnModifyEarly(v115));
const v118 = new Obj1();
console.log(hasOwnModifyEarly(v118));
const v121 = new Obj2();
console.log(hasOwnModifyEarly(v121));
function hasOwnDelete(a125) {
    let result = "";
    for (const v128 in a125) {
        delete a125.x;
        if (a125.hasOwnProperty(v128)) {
            result += `own: ${v128}, `;
        } else {
            result += `not: ${v128}, `;
        }
    }
    return result;
}
console.log("hasOwnDelete:");
const v135 = new Obj1();
console.log(hasOwnDelete(v135));
const v138 = new Obj2();
console.log(hasOwnDelete(v138));
const v141 = new Obj1();
console.log(hasOwnDelete(v141));
const v144 = new Obj2();
console.log(hasOwnDelete(v144));
function hasOwnDeleteLate(a148) {
    let result = "";
    for (const v151 in a148) {
        if (a148.hasOwnProperty(v151)) {
            result += `own: ${v151}, `;
        } else {
            result += `not: ${v151}, `;
        }
        delete a148.x;
    }
    return result;
}
console.log("hasOwnDeleteLate:");
const v158 = new Obj1();
console.log(hasOwnDeleteLate(v158));
const v161 = new Obj2();
console.log(hasOwnDeleteLate(v161));
const v164 = new Obj1();
console.log(hasOwnDeleteLate(v164));
const v167 = new Obj2();
console.log(hasOwnDeleteLate(v167));
function hasOwnModifyOther(a171, a172) {
    let result = "";
    for (const v175 in a171) {
        if (a171.hasOwnProperty(v175)) {
            result += `own: ${v175}, `;
        } else {
            result += `not: ${v175}, `;
        }
        a172.x = "123";
    }
    return result;
}
console.log("hasOwnModifyOther:");
const v182 = new Obj1();
const v183 = new Obj1();
console.log(hasOwnModifyOther(v182, v183));
const v186 = new Obj2();
const v187 = new Obj2();
console.log(hasOwnModifyOther(v186, v187));
const v190 = new Obj1();
const v191 = new Obj1();
console.log(hasOwnModifyOther(v190, v191));
const v194 = new Obj2();
const v195 = new Obj2();
console.log(hasOwnModifyOther(v194, v195));
const v198 = new Obj1();
const v199 = new Obj2();
console.log(hasOwnModifyOther(v198, v199));
const v202 = new Obj2();
const v203 = new Obj1();
console.log(hasOwnModifyOther(v202, v203));
const v207 = { enumerable: true };
const t182 = Obj2.prototype;
t182["1"] = v207;
function hasOwnNumeric(a211) {
    let result = "";
    for (const v214 in a211) {
        if (a211.hasOwnProperty(v214)) {
            result += `own: ${v214}, `;
            a211["1"] = { enumerable: true };
        } else {
            result += `not: ${v214}, `;
        }
    }
    return result;
}
console.log("hasOwnNumeric:");
const v223 = new Obj1();
console.log(hasOwnNumeric(v223));
const v226 = new Obj2();
console.log(hasOwnNumeric(v226));
const v229 = new Obj1();
console.log(hasOwnNumeric(v229));
const v232 = new Obj2();
console.log(hasOwnNumeric(v232));
console.log("hasOwnUnchangedWithNumeric:");
const v237 = new Obj1();
console.log(hasOwnUnchanged(v237));
const v240 = new Obj2();
console.log(hasOwnUnchanged(v240));
function hasOwnNumeric2(a244) {
    let result = "";
    for (const v247 in a244) {
        if (a244.hasOwnProperty(v247)) {
            result += `own: ${v247}, `;
            const t215 = Obj2.prototype;
            delete t215["1"];
        } else {
            result += `not: ${v247}, `;
        }
    }
    return result;
}
console.log("hasOwnNumeric2:");
const v256 = new Obj1();
console.log(hasOwnNumeric2(v256));
const v260 = { enumerable: true };
const t227 = Obj2.prototype;
t227["1"] = v260;
const v263 = new Obj2();
console.log(hasOwnNumeric2(v263));
const v267 = { enumerable: true };
const t232 = Obj2.prototype;
t232["1"] = v267;
const v270 = new Obj1();
console.log(hasOwnNumeric2(v270));
const v274 = { enumerable: true };
const t237 = Obj2.prototype;
t237["1"] = v274;
const v277 = new Obj2();
console.log(hasOwnNumeric2(v277));
function hasOwnNumeric3(a281) {
    let result = "";
    for (const v284 in a281) {
        if (a281.hasOwnProperty(v284)) {
            result += `own: ${v284}, `;
            a281[7] = 1;
        } else {
            result += `not: ${v284}, `;
        }
    }
    return result;
}
const t253 = Obj2.prototype;
t253[7] = 2;
console.log("hasOwnNumeric3:");
const v293 = new Obj1();
console.log(hasOwnNumeric3(v293));
const v296 = new Obj2();
console.log(hasOwnNumeric3(v296));
const v299 = new Obj1();
console.log(hasOwnNumeric3(v299));
const v302 = new Obj1();
console.log(hasOwnNumeric3(v302));
const v305 = new Obj2();
console.log(hasOwnNumeric3(v305));
const v308 = new Obj2();
console.log(hasOwnNumeric3(v308));
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// [COV] edge counters initialized. Shared memory: shm_id_1162266_0 with 1587369 edges
// V8 is running with experimental features enabled. Stability and security will suffer.
// 
// 
// #
// # Fatal error in ../../src/maglev/maglev-assembler-inl.h, line 777
// # Debug check failed: !allow_allocate() implies builtin == Builtin::kDoubleToI || !BuiltinCanAllocate(builtin).
// #
// #
// #
// #FailureMessage Object: 0x7fb01f496700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5619ee22aa82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5619ee2292a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5619ee21d546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5619ee21cd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5619efd3613e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5619f01017a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5619efc933eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5619efc41150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5619efc3dfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5619ef9945d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5619ef98b7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5619ee409cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5619ef98e588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5619ee22e14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5619ee239925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5619ee226650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fb02b052ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fb02b0e4850]
// Received signal 6
// STDOUT:
// Warning: unknown flag --experimental-wasm-memory64.
// Try --help for options
// hasOwnUnchanged:
// own: 4, own: y, own: w, not: x, 
// own: 5, own: y, own: x, not: z, 
// own: 4, own: y, own: w, not: x, 
// own: 5, own: y, own: x, not: z, 
// hasOwnDifferentObj:
// not: 5, own: y, not: x, not: z, 
// not: 4, own: y, not: w, own: x, 
// own: 4, own: y, own: w, not: x, 
// own: 5, own: y, own: x, not: z, 
// not: 4, own: y, not: w, own: x, 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 162ms
