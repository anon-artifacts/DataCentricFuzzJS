function f0() {
}
var UBound = 0;
var BUGNUMBER = "(none)";
var summary = "Testing obj.prop getter/setter";
var statprefix = "Status: ";
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
var cnDEFAULT = "default name";
var cnFRED = "Fred";
var obj = {};
var obj2 = {};
var s = "";
const v32 = new Object();
obj = v32;
obj.nameSETS = 0;
obj.nameGETS = 0;
function f38(a39) {
    this._name = a39;
    let v42 = this.nameSETS;
    v42++;
}
function f44() {
    let v46 = this.nameGETS;
    v46++;
    return this._name;
}
Object.defineProperty(obj, "name", { enumerable: true, configurable: true, set: f38, get: f44 });
status = "In SECTION1 of test after 0 sets, 0 gets";
actual = [obj.nameSETS,obj.nameGETS];
expect = [0,0];
addThis();
s = obj.name;
status = "In SECTION1 of test after 0 sets, 1 get";
actual = [obj.nameSETS,obj.nameGETS];
expect = [0,1];
addThis();
obj.name = cnFRED;
status = "In SECTION1 of test after 1 set, 1 get";
actual = [obj.nameSETS,obj.nameGETS];
expect = [1,1];
addThis();
obj.name = obj.name;
status = "In SECTION1 of test after 2 sets, 2 gets";
actual = [obj.nameSETS,obj.nameGETS];
expect = [2,2];
addThis();
const t50 = Object.prototype;
t50.nameSETS = 0;
const t53 = Object.prototype;
t53.nameGETS = 0;
const v91 = Object.prototype;
function f95(a96) {
    this._name = a96;
    let v99 = this.nameSETS;
    v99++;
}
function f101() {
    let v103 = this.nameGETS;
    v103++;
    return this._name;
}
Object.defineProperty(v91, "name", { enumerable: true, configurable: true, set: f95, get: f101 });
const v109 = new Object();
obj = v109;
status = "In SECTION2 of test after 0 sets, 0 gets";
actual = [obj.nameSETS,obj.nameGETS];
expect = [0,0];
addThis();
s = obj.name;
status = "In SECTION2 of test after 0 sets, 1 get";
actual = [obj.nameSETS,obj.nameGETS];
expect = [0,1];
addThis();
obj.name = cnFRED;
status = "In SECTION2 of test after 1 set, 1 get";
actual = [obj.nameSETS,obj.nameGETS];
expect = [1,1];
addThis();
obj.name = obj.name;
status = "In SECTION2 of test after 2 sets, 2 gets";
actual = [obj.nameSETS,obj.nameGETS];
expect = [2,2];
addThis();
function TestObject() {
}
const t90 = TestObject.prototype;
t90.nameSETS = 0;
const t92 = TestObject.prototype;
t92.nameGETS = 0;
const v149 = TestObject.prototype;
function f153(a154) {
    this._name = a154;
    let v157 = this.nameSETS;
    v157++;
}
function f159() {
    let v161 = this.nameGETS;
    v161++;
    return this._name;
}
Object.defineProperty(v149, "name", { enumerable: true, configurable: true, set: f153, get: f159 });
const t105 = TestObject.prototype;
t105.name = cnDEFAULT;
const v168 = new TestObject();
obj = v168;
status = "In SECTION3 of test after 1 set, 0 gets";
actual = [obj.nameSETS,obj.nameGETS];
expect = [1,0];
addThis();
s = obj.name;
status = "In SECTION3 of test after 1 set, 1 get";
actual = [obj.nameSETS,obj.nameGETS];
expect = [1,1];
addThis();
obj.name = cnFRED;
status = "In SECTION3 of test after 2 sets, 1 get";
actual = [obj.nameSETS,obj.nameGETS];
expect = [2,1];
addThis();
obj.name = obj.name;
status = "In SECTION3 of test after 3 sets, 2 gets";
actual = [obj.nameSETS,obj.nameGETS];
expect = [3,2];
addThis();
const v203 = new TestObject();
obj2 = v203;
status = "obj2 = new TestObject() after 1 set, 0 gets";
actual = [obj2.nameSETS,obj2.nameGETS];
expect = [1,0];
addThis();
obj2.name = obj.name + obj2.name;
status = "obj2 = new TestObject() after 2 sets, 1 get";
actual = [obj2.nameSETS,obj2.nameGETS];
expect = [2,1];
addThis();
status = "In SECTION3 of test after 3 sets, 3 gets";
actual = [obj.nameSETS,obj.nameGETS];
expect = [3,3];
addThis();
test();
function addThis() {
    statusitems[UBound] = status;
    actualvalues[UBound] = actual.toString();
    expectedvalues[UBound] = expect.toString();
    UBound++;
}
function test() {
    f0(BUGNUMBER);
    f0(summary);
    for (let i241 = 0; i241 < UBound; i241++) {
        f0(expectedvalues[i241], actualvalues[i241], getStatus(i241));
    }
}
function getStatus(a252) {
    return statprefix + statusitems[a252];
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
// #FailureMessage Object: 0x7fa542025700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x56204f05da82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x56204f05c2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x56204f050546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x56204f04fd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x562050b6913e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x562050f347a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x562050ac63eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x562050a74150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x562050a70fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5620507c75d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5620507be7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x56204f23ccb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5620507c1588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x56204f06114f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x56204f06c925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x56204f059650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fa54bbddac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fa54bc6f850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 155ms
