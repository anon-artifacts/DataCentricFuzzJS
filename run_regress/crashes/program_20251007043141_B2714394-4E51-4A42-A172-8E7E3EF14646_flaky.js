function f0() {
    const v3 = new Array(10);
    var ary = v3;
    const v6 = new Object();
    var obj0 = v6;
    var a;
    var b;
    var c;
    var d;
    var e;
    var f;
    var g;
    var h;
    a = -26285;
    b = 34688;
    c = 52521;
    d = -64794;
    e = 36431;
    f = 12505;
    g = 27940;
    h = 45787;
    obj0.a = -64776;
    obj0.b = -24499;
    obj0.c = -38216;
    obj0.d = 50641;
    obj0.e = 20944;
    ary[0] = 23978;
    ary[1] = 33605;
    ary[100] = 9540;
    f = (++a - obj0.e) * (obj0.c ^ ((obj0.a - 2573) | (obj0.c > -61175)));
    const v59 = obj0.b;
    let v60 = obj0.a;
    if ((v59 * ++v60) < (h ^ obj0.d)) {
        if ((obj0.d & ((27871 | 1217) != obj0.c)) == (-(-48859 * 2526) | obj0.b)) {
        } else {
            obj0.b = (b & !(a == e)) - (-55010 - obj0.a);
        }
        obj0.b = obj0.d;
        a = ((5072 | (f != -63808)) | h) * (((3939 | d) * !obj0.b) ^ ((-38803 & -32903) != obj0.e));
    } else {
        obj0.d = +(((e - -18359) + obj0.c) * (c & obj0.c));
    }
    f = +(d - 39215);
    c = b;
    print("a = " + (a >> 3));
    print("b = " + (b >> 3));
    print("c = " + (c >> 3));
    print("d = " + (d >> 3));
    print("e = " + (e >> 3));
    print("f = " + (f >> 3));
    print("g = " + (g >> 3));
    print("h = " + (h >> 3));
    print("obj0.a = " + (obj0.a >> 3));
    print("obj0.b = " + (obj0.b >> 3));
    print("obj0.c = " + (obj0.c >> 3));
    print("obj0.d = " + (obj0.d >> 3));
    print("obj0.e = " + (obj0.e >> 3));
    print("ary[0] = " + (ary[0] >> 3));
    print("ary[1] = " + (ary[1] >> 3));
    print("ary[100] = " + (ary[100] >> 3));
    print("done");
}
f0();
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
// #FailureMessage Object: 0x7f47ef1dd700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x56513490ca82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x56513490b2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5651348ff546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5651348fed95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x56513641813e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5651367e37a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5651363753eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x565136323150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x56513631ffd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5651360765d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x56513606d7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x565134aebcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x565136070588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x56513491014f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x56513491b925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x565134908650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f47fc59cac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f47fc62e850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 196ms
