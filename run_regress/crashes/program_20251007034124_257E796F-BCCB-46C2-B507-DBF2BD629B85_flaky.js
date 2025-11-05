var count = 0;
function Parent() {
    this.log("Parent ctor");
    this.meth1();
    this.log("data3 before : " + this.data3);
    this.meth2();
    this.log("data3 after : " + this.data3);
    this.log("");
    if (count++) {
        this.data3;
    }
}
function f29() {
    this.log("Parent.meth1()");
}
const t15 = Parent.prototype;
t15.meth1 = f29;
function f34() {
    this.log("Parent.meth2()");
    this.data4 = "x";
}
const t21 = Parent.prototype;
t21.meth2 = f34;
function f41(a42) {
    print(a42);
}
const t26 = Parent.prototype;
t26.log = f41;
function ParentEmptyCtor() {
}
ParentEmptyCtor.prototype = Parent.prototype;
function ChildA() {
    this.log("ChildA ctor");
    Parent.call(this);
}
const v54 = new ParentEmptyCtor();
ChildA.prototype = v54;
const t37 = ChildA.prototype;
t37.constructor = ChildA;
function f56() {
    this.log("ChildA.meth1()");
    this.data3 = "z";
}
const t43 = ChildA.prototype;
t43.meth1 = f56;
function f63() {
    this.log("ChildA.meth2()");
}
const t48 = ChildA.prototype;
t48.meth2 = f63;
function ChildB() {
    this.log("ChildB ctor");
    Parent.call(this);
}
const v74 = new ParentEmptyCtor();
ChildB.prototype = v74;
const t56 = ChildB.prototype;
t56.constructor = ChildB;
function demo() {
    new ChildB();
    new ChildA();
}
demo();
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
// #FailureMessage Object: 0x7f15ebff5700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55dc56bc0a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55dc56bbf2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55dc56bb3546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55dc56bb2d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55dc586cc13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55dc58a977a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55dc586293eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55dc585d7150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55dc585d3fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55dc5832a5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55dc583217e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55dc56d9fcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55dc58324588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55dc56bc414f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55dc56bcf925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55dc56bbc650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f1607224ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f16072b6850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 109ms
