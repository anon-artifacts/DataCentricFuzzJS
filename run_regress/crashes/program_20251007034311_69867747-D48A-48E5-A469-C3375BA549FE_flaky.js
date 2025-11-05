var runningJITtedCode = false;
function test0() {
    function makeArrayLength(a4) {
        if (((((a4 < 1) || (a4 > 4294967295)) || (a4 != a4)) || isNaN(a4)) || !isFinite(a4)) {
            return 100;
        } else {
            return Math.floor(a4) & 65535;
        }
    }
    var obj0 = {};
    var obj1 = {};
    var arrObj0 = {};
    function f30(a31) {
        if (runningJITtedCode) {
            obj0.length = -obj1.length;
        }
        let v34 = obj0.length;
        ++v34;
    }
    var func2 = f30;
    var floatary = [-1.5,-0.5,-0,1.5,12.987,12.123,100.33,8.8,5.5,44.66,42.24,124.07,-0.99,56.65,42.24];
    var intfloatary = [1,4,-1,-6,-0,+0,55,-100,2.56,-3.14,6.6,42,2.3,67,1.97,-24,77.99];
    var intary = [4,66,767,-100,0,1213,34,42,55,-123,567,77,-234,88,11,-66];
    var a = 1;
    var b = 1;
    var c = 1;
    var d = 1;
    var e = 1;
    obj1.length = 2147483647;
    arrObj0.prop0 = 1;
    arrObj0.length = makeArrayLength(1);
    function _array2iterate(a121) {
        for (const v122 in a121) {
            if (v122.indexOf("method") == 0) {
                continue;
            }
            if (a121[v122] instanceof Array) {
                _array2iterate(a121[v122]);
                (intary = intary.concat((obj1 = arrObj0).length, arrObj0.prop0, e, b, obj0.length, arrObj0.prop0, obj1.prop0))[20];
                function f139(a140) {
                    return (a140 + arrObj0.length) < obj1.prop0;
                }
                var v502047 = intary.every(f139, this);
                function f148(a149) {
                    return 1;
                }
                ary = intfloatary.filter(f148);
                function f153(a154, a155) {
                    let v156 = intary[a155];
                    v156++;
                }
                v502047 = intary.forEach(f153);
                v502047 = ary.indexOf(b);
                v502047 = intfloatary.lastIndexOf(obj0.length, 5);
                v502047 = ary.join();
                function f165(a166) {
                    return d * a166;
                }
                v502047 = intary.map(f165);
                function f169(a170) {
                    obj1.length = a170 + obj0.length;
                    return obj1.length;
                }
                v502047 = intfloatary.reduce(f169, obj0.prop0);
                v502047 = intfloatary.reverse();
                v502047 = ary.unshift(obj0.length, e, e, a, c, d, e);
                v502047 = ary.shift();
                v502047 = floatary.slice(4, -3);
                function f184(a185) {
                    return a185 < a;
                }
                v502047 = ary.some(f184);
                v502047 = intfloatary.sort();
                v502047 = Array.isArray(floatary);
                v502047 = floatary.splice(obj0.length, d, e, d, e, e, a);
            } else {
                b += a121[v122];
            }
        }
    }
    _array2iterate([[1],[1],[1,1,[func2.call(obj1, 1),func2.call(obj1, 1),1,[arrObj0.length,1,[arrObj0.length]]]]]);
}
test0();
runningJITtedCode = true;
test0();
print("pass");
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// [COV] edge counters initialized. Shared memory: shm_id_1162266_7 with 1587369 edges
// V8 is running with experimental features enabled. Stability and security will suffer.
// 
// 
// #
// # Fatal error in ../../src/maglev/maglev-assembler-inl.h, line 777
// # Debug check failed: !allow_allocate() implies builtin == Builtin::kDoubleToI || !BuiltinCanAllocate(builtin).
// #
// #
// #
// #FailureMessage Object: 0x7f788f859700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55f278060a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55f27805f2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55f278053546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55f278052d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55f279b6c13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55f279f377a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55f279ac93eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55f279a77150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55f279a73fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55f2797ca5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55f2797c17e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55f27823fcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55f2797c4588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55f27806414f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55f27806f925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55f27805c650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f789c417ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f789c4a9850]
// Received signal 6
// STDOUT:
// Warning: unknown flag --experimental-wasm-memory64.
// Try --help for options
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 177ms
