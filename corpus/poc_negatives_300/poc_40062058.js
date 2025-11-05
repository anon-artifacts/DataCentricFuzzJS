function main() {
function v0(v1,v2) {
for (let v3 = 0; v3 < 4000; v3++) {
const v6 = new BigUint64Array(62026);
}
const v9 = 1000.0 + "MIN_VALUE";
for (let v10 = 0; v10 < 4000; v10++) {
}
return v1;
}
for (let v11 = 0; v11 < 4000; v11++) {
const v12 = v0(v0,v0);
}
gc();
}
%NeverOptimizeFunction(main);
main();
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// #
// # Fatal error in ../../src/heap/sweeper.cc, line 681
// # Debug check failed: page->area_size() >= static_cast<size_t>(marking_state_->live_bytes(page)) (253632 vs. 467772).
// #
// #
// #
// #FailureMessage Object: 0x7fffaa8f5720
// ==== C stack trace ===============================
// /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0x6e4ca2) [0x561f5a013ca2]
// /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0x6e37c7) [0x561f5a0127c7]
// /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0x6d652f) [0x561f5a00552f]
// /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0x6d5eb5) [0x561f5a004eb5]
// /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0xed70c6) [0x561f5a8060c6]
// /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0xed69e0) [0x561f5a8059e0]
// /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0xda45b9) [0x561f5a6d35b9]
// /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0xdac22d) [0x561f5a6db22d]
// /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0xda7df9) [0x561f5a6d6df9]
// /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0xd4de7f) [0x561f5a67ce7f]
// /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0xd49bc2) [0x561f5a678bc2]
// /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0xd46354) [0x561f5a675354]
// /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0xd44ee3) [0x561f5a673ee3]
// /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0xc42cd9) [0x561f5a571cd9]
// /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0x1833f1c) [0x561f5b162f1c]
// /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0x183384c) [0x561f5b16284c]
// [0x561edfeaf978]
// Received signal 6
// STDOUT:
// [COV] edge counters initialized. Shared memory: shm_id_3072076_8 with 893006 edges
// [COV] Additional 0 edges for builtins initialized.
// ARGS: /home/uuu/v8_src.main/v8/out/fuzzbuild/d8 --expose-gc --future --harmony --assert-types --harmony-rab-gsab --harmony-struct --allow-natives-syntax --interrupt-budget=1000 --fuzzing