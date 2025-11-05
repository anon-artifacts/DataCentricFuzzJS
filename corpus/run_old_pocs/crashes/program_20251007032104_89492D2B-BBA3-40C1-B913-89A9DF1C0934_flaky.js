function opt(a1) {
    var flag = 0;
    const v6 = new String("aa");
    var tmp = v6;
    tmp.x = 2;
    var i = 0;
    function test() {
        testDate("0001-10-13T05:16:33Z");
        testDate("0011-10-13T05:16:33Z");
        var hiddenValue = getHiddenValue();
        var result;
        testDate("0111-10-13T05:16:33Z");
        testDate("1111-10-13T05:16:33Z");
        testDate("-000001-11-13T19:40:33Z");
        testDate("-000011-11-13T19:40:33Z");
        testDate("-000111-11-13T19:40:33Z");
        testDate("-001111-11-13T19:40:33Z");
    }
    var ary_3 = [1.1,2.2,3.3];
    var error = null;
    var DjjB = tmp.trimLeft();
    const v45 = new Int32Array(0);
    var test12 = v45;
    once = 1;
    var i = 0;
    function f51(a52, a53, a54) {
        a52[0] = 1.1;
        a52[1] = 2.2;
        [...a54];
        var fun = eval(str);
        a53[0] = a52[0];
        a52[2] = 2.3023e-320;
    }
    var go = f51;
    for (const v65 in tmp) {
        if (once) {
            function f67(a68, a69, a70) {
                a68[0] = 1.1;
                a68[1] = 2.2;
                [...a70];
                a69[0] = a68[0];
                a68[2] = 2.3023e-320;
            }
            var go = f67;
            delete tmp.x;
            var fun = eval(str);
            var object = {};
            var i = 0.26279099966609487;
            const v88 = new Float64Array(16);
            var f64_1 = v88;
            once = 0.2969306068681026;
        }
        var z = cache.push(i, String() * 42);
        tmp.y = a1;
        for (let i98 = 0; i98 < 594; ++i98) {
            var KaRd = Symbol;
        }
        tmp.x = 1;
    }
    return [1,tmp.x - 524286];
}
var cache = [];
for (let i115 = 0; i115 < 561; i115++) {
    opt(1);
}
evil = opt(0);
function shouldBe(a127, a128) {
}
var str = "class x extends Array{}";
const v133 = new Float64Array(16);
var f64_1 = v133;
evil[0] = 1.1;
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
// #FailureMessage Object: 0x7f1a4a1e5700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55fc41a5da82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55fc41a5c2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55fc41a50546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55fc41a4fd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55fc4356913e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55fc439347a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55fc434c63eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55fc43474150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55fc43470fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55fc431c75d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55fc431be7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55fc41c3ccb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55fc431c1588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55fc41a6114f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55fc41a6c925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55fc41a59650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f1a53d9dac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f1a53e2f850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_old_pocs --importCorpus=corpus_old_pocs --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --maglev --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 211ms
