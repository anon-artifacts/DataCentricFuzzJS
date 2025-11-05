[269.67331701718604,0.2099850541497843,-1000000000.0,Infinity,-4.0,-1.7976931348623157e+308,2.220446049250313e-16,-7.6010503421663795,397444.8874380966];
[-2.220446049250313e-16,-Infinity,3.0,-0.0,-Infinity,-1e-15,-2.2250738585072014e-308,-487280.3090337878];
[-483.1697243217902,431653.8516731139,0.9267461935219001,1.7976931348623157e+308,457.96225872583227,0.0,-1.5444890114784048e+308];
[4294967295];
[255,1073741823,-228641421];
[-3819,-2147483647,-128,256,-1024,257];
function f15(a16, a17, a18) {
    function f19(a20) {
        return (((a20 = a20 | 0) >>> 0) / 3) | 0;
    }
    function f29(a30) {
        return (((a30 = a30 | 0) >>> 0) / 17) | 0;
    }
    function f39(a40) {
        return (((a40 = a40 | 0) >>> 0) / 1024) | 0;
    }
    function f49(a50) {
        return (((a50 = a50 | 0) >>> 0) / 3343330) | 0;
    }
    const o59 = {
        "f1": f19,
        "f2": f29,
        "f3": f39,
        "f4": f49,
    };
    return o59;
}
const o61 = {
};
const v64 = new ArrayBuffer(1024);
const v65 = f15(this, o61, v64);
for (let i67 = 0; i67 < 4294967296; i67 += 3999777) {
    (i67 / 3) | 0;
    v65.f1(i67);
    (i67 / 17) | 0;
    for (let i83 = 3;
        i83 >= 0;
        (() => {
            --i83;
            const v90 = new SharedArrayBuffer(4);
            const v92 = new Uint32Array(v90);
            Atomics.store(v92, 0, 4000000000);
            if (v92[0] != 4000000000) {
                v92[0];
            }
        })()) {
    }
    [4.0,-7.374942403039572,-6.1954517063760095,465415.92966909776,-1000000.0,320035.50374621456,NaN,-1000.0,0.29775458393875065,5.714953607838267e+307];
    function f103(a104, a105, a106) {
        this.item = a106;
    }
    function f108(a109, a110) {
        if (a110 > 0) {
            f108();
            new f103();
        }
    }
    f108(0, Math.max(4 + 2));
    for (let v123 = 0; v123 < 50; v123++) {
        f108();
    }
    v65.f2(i67);
    (i67 / 1024) | 0;
    v65.f3(i67);
    (i67 / 3343330) | 0;
    v65.f4(i67);
}
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// #
// # Fatal error in ../../src/objects/shared-function-info-inl.h, line 629
// # Debug check failed: HasFeedbackMetadata(kAcquireLoad).
// #
// #
// #
// #FailureMessage Object: 0x7f8f167f9f90
// ==== C stack trace ===============================
// 
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x756c13) [0x557882288c13]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x75622b) [0x55788228822b]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x74e279) [0x557882280279]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x74de55) [0x55788227fe55]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x128b893) [0x557882dbd893]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1283d0a) [0x557882db5d0a]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1dcdbba) [0x5578838ffbba]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1d33cfb) [0x557883865cfb]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1b4ece3) [0x557883680ce3]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1b497ff) [0x55788367b7ff]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1d386ec) [0x55788386a6ec]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1d3ad09) [0x55788386cd09]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1d4dcae) [0x55788387fcae]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1d4e514) [0x557883880514]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1d3d677) [0x55788386f677]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1d4e776) [0x557883880776]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1d4f1ad) [0x5578838811ad]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1b4e3b5) [0x5578836803b5]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1b497ff) [0x55788367b7ff]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1b435be) [0x5578836755be]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1b41a3d) [0x557883673a3d]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1b3cfda) [0x55788366efda]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x9cc16f) [0x5578824fe16f]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1b3edc3) [0x557883670dc3]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x75896b) [0x55788228a96b]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x75e48b) [0x55788229048b]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x754689) [0x557882286689]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f8f4ea94ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126a40) [0x7f8f4eb26a40]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --jobs=28 --profile=v8 --timeout=800 --storagePath=/home/uuu/fuzz_main --importCorpus=/home/uuu/dev/corpus/out.test --corpusImportMode=full --argumentRandomization /home/uuu/v8_src.main/v8/out/fuzz/d8
// TARGET ARGS: /home/uuu/v8_src.main/v8/out/fuzz/d8 --expose-gc --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --harmony --js-staging --no-harmony-set-methods --no-enable-sharedarraybuffer-per-context --maglev-inline-api-calls --concurrent-maglev-high-priority-threads --no-optimize-on-next-call-optimizes-to-maglev --no-jitless --osr-from-maglev --always-osr-from-maglev --no-stress-lazy-source-positions --concurrent-sparkplug-high-priority-threads --no-sparkplug-needs-short-builtins --no-shared-string-table --no-transition-strings-during-gc-with-stack --no-stress-concurrent-inlining-attach-code --stress-turbo-late-spilling --no-stress-inline --reorder-builtins --turbo-instruction-scheduling --turbo-stress-instruction-scheduling --stress-gc-during-compilation --turboshaft-instruction-selection --no-turboshaft-wasm-instruction-selection-staged --no-turboshaft-verify-reductions --no-optimize-for-size --no-stress-wasm-code-gc --no-lazy-new-space-shrinking --no-separate-gc-phases --no-gc-global --scavenge-separate-stack-scanning --optimize-gc-for-battery --no-verify-heap --no-compact-on-every-full-gc --stress-compaction --no-stress-compaction-random --no-flush-baseline-code --flush-code-based-on-time --stress-flush-code --no-stress-per-context-marking-worklist --no-stress-incremental-marking --no-concurrent-marking-high-priority-threads --no-randomize-all-allocations --manual-evacuation-candidates-selection --no-enable-source-at-csa-bind --no-stress-background-compile --no-embedder-instance-types --no-expose-externalize-string --no-allow-unsafe-function-constructor --no-force-slow-path --no-max-lazy --always-turbofan --no-always-osr --prepare-always-turbofan --no-deopt-to-baseline --parallel-compile-tasks-for-eager-toplevel --no-expose-inspector-scripts --no-mega-dom-ic --no-regexp-interpret-all --no-minor-ms --no-slow-histograms --use-external-strings
// CONTRIBUTORS: FloatArrayGenerator, FloatGenerator, IntegerGenerator, CombineMutator, IntArrayGenerator
// EXECUTION TIME: 753ms
