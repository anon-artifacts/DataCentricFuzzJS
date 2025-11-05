function f0() {
    function* Goo() {
    }
    const goo = {};
    function IsGoo(a5) {
        return a5 instanceof Goo;
    }
    IsGoo(goo);
    IsGoo(goo);
    IsGoo(goo);
}
f0();
function f11() {
    function* Goo() {
    }
    const goo = {};
    Goo.prototype = Object.prototype;
    function IsGoo(a18) {
        return a18 instanceof Goo;
    }
    IsGoo(goo);
    IsGoo(goo);
    IsGoo(goo);
}
f11();
function f24() {
    function* Goo() {
    }
    const goo = {};
    Goo.prototype = 42;
    function IsGoo(a30) {
        return a30 instanceof Goo;
    }
    const v32 = (a33) => {
        let v34;
        try { v34 = IsGoo(goo); } catch (e) {}
        return v34;
    };
    v32();
    const v37 = (a38) => {
        let v39;
        try { v39 = IsGoo(goo); } catch (e) {}
        return v39;
    };
    v37();
    const v41 = (a42) => {
        let v43;
        try { v43 = IsGoo(goo); } catch (e) {}
        return v43;
    };
    v41();
}
f24();
function f46() {
    function* Goo() {
    }
    const goo = {};
    function IsGoo(a51) {
        return a51 instanceof Goo;
    }
    IsGoo(goo);
    IsGoo(goo);
    IsGoo(goo);
    Goo.prototype = Object.prototype;
    IsGoo(goo);
}
f46();
function f60() {
    function* Goo() {
    }
    const goo = {};
    function IsGoo(a65) {
        return a65 instanceof Goo;
    }
    IsGoo(goo);
    IsGoo(goo);
    IsGoo(goo);
    Goo.prototype = 42;
    const v71 = (a72) => {
        let v73;
        try { v73 = IsGoo(goo); } catch (e) {}
        return v73;
    };
    v71();
}
f60();
function f77() {
    function* Goo() {
    }
    const goo = Goo();
    function IsGoo(a82) {
        return a82 instanceof Goo;
    }
    IsGoo(goo);
    IsGoo(goo);
    IsGoo(goo);
}
f77();
function f88() {
    function* Goo() {
    }
    const goo = Goo();
    Goo.prototype = {};
    function IsGoo(a94) {
        return a94 instanceof Goo;
    }
    IsGoo(goo);
    IsGoo(goo);
    IsGoo(goo);
}
f88();
function f100() {
    function* Goo() {
    }
    const goo = Goo();
    Goo.prototype = 42;
    function IsGoo(a106) {
        return a106 instanceof Goo;
    }
    const v108 = (a109) => {
        let v110;
        try { v110 = IsGoo(goo); } catch (e) {}
        return v110;
    };
    v108();
    const v113 = (a114) => {
        let v115;
        try { v115 = IsGoo(goo); } catch (e) {}
        return v115;
    };
    v113();
    const v117 = (a118) => {
        let v119;
        try { v119 = IsGoo(goo); } catch (e) {}
        return v119;
    };
    v117();
}
f100();
function f122() {
    function* Goo() {
    }
    const goo = Goo();
    function IsGoo(a127) {
        return a127 instanceof Goo;
    }
    IsGoo(goo);
    IsGoo(goo);
    IsGoo(goo);
    Goo.prototype = {};
    IsGoo(goo);
}
f122();
function f135() {
    function* Goo() {
    }
    const goo = Goo();
    function IsGoo(a140) {
        return a140 instanceof Goo;
    }
    IsGoo(goo);
    IsGoo(goo);
    IsGoo(goo);
    Goo.prototype = 42;
    const v146 = (a147) => {
        let v148;
        try { v148 = IsGoo(goo); } catch (e) {}
        return v148;
    };
    v146();
}
f135();
function f152() {
    function* Goo() {
    }
    Goo.prototype = 42;
    const goo = Goo();
    function IsGoo(a158) {
        return a158 instanceof Goo;
    }
    const v160 = (a161) => {
        let v162;
        try { v162 = IsGoo(goo); } catch (e) {}
        return v162;
    };
    v160();
    const v165 = (a166) => {
        let v167;
        try { v167 = IsGoo(goo); } catch (e) {}
        return v167;
    };
    v165();
    const v169 = (a170) => {
        let v171;
        try { v171 = IsGoo(goo); } catch (e) {}
        return v171;
    };
    v169();
    Goo.prototype = {};
    IsGoo(goo);
}
f152();
function f176() {
    function* Goo() {
    }
    Goo.prototype = 42;
    const goo = Goo();
    Goo.prototype = {};
    function IsGoo(a183) {
        return a183 instanceof Goo;
    }
    IsGoo(goo);
    IsGoo(goo);
    IsGoo(goo);
    Goo.prototype = Object.prototype;
    IsGoo(goo);
}
f176();
function f192() {
    function* Goo() {
    }
    Goo.prototype = {};
    const goo = Goo();
    Goo.prototype = 42;
    function IsGoo(a199) {
        return a199 instanceof Goo;
    }
    const v201 = (a202) => {
        let v203;
        try { v203 = IsGoo(goo); } catch (e) {}
        return v203;
    };
    v201();
    const v206 = (a207) => {
        let v208;
        try { v208 = IsGoo(goo); } catch (e) {}
        return v208;
    };
    v206();
    const v210 = (a211) => {
        let v212;
        try { v212 = IsGoo(goo); } catch (e) {}
        return v212;
    };
    v210();
    Goo.prototype = Object.prototype;
    IsGoo(goo);
}
f192();
function f218() {
    function* Goo() {
    }
    Goo.prototype = {};
    const goo = Goo();
    Goo.prototype = {};
    function IsGoo(a225) {
        return a225 instanceof Goo;
    }
    IsGoo(goo);
    IsGoo(goo);
    Goo.prototype = Object.prototype;
    IsGoo(goo);
}
f218();
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
// #FailureMessage Object: 0x7fed37b2f700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55a262f3ea82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55a262f3d2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55a262f31546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55a262f30d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55a264a4a13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55a264e157a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55a2649a73eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55a264955150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55a264951fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55a2646a85d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55a26469f7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55a26311dcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55a2646a2588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55a262f4214f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55a262f4d925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55a262f3a650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fed416e7ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fed41779850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 142ms
