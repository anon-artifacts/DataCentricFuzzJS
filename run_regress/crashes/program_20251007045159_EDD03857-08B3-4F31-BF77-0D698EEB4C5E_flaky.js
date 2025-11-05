function write(a1) {
    print(a1 + "");
}
function Verify(a7, a8, a9) {
    if (a9 != a8) {
        write((((("Failed: " + a7) + ". Exp:") + a9) + " Act:") + a8);
    } else {
        write((("PASS: " + a7) + ":") + a9);
    }
}
function PropertyExists(a27, a28) {
    return a27.hasOwnProperty(a28);
}
function check(a31) {
    write(a31);
}
function IncrVal() {
    check((("IncrVal:: " + this.val) + " args.length : ") + arguments.length);
    let v45 = this.val;
    v45++;
    return (this.val + " ") + arguments.length;
}
var val = 100;
var fGlobalThis;
fGlobalThis = IncrVal.bind();
Verify("global object", fGlobalThis(), "101 0");
Verify("global object", fGlobalThis(10), "102 1");
Verify("global object", fGlobalThis(10, 20), "103 2");
val = 100;
fGlobalThis = IncrVal.bind(this);
Verify("global object", fGlobalThis(), "101 0");
Verify("global object", fGlobalThis(10), "102 1");
Verify("global object", fGlobalThis(10, 20), "103 2");
val = 100;
fGlobalThis = IncrVal.bind(this, 50);
Verify("global object", fGlobalThis(), "101 1");
Verify("global object", fGlobalThis(10), "102 2");
Verify("global object", fGlobalThis(10, 20), "103 3");
val = 100;
fGlobalThis = IncrVal.bind(this, 50, 51);
Verify("global object", fGlobalThis(), "101 2");
Verify("global object", fGlobalThis(10), "102 3");
Verify("global object", fGlobalThis(10, 20), "103 4");
function testGlobalBinding() {
    check("Testing Bind to global object");
    val = 100;
    var f1 = IncrVal.bind();
    Verify("GlobalObject length", f1.length, 0);
    Verify("global object", f1(), "101 0");
    Verify("global object", f1(10), "102 1");
    Verify("global object", f1(10, 20), "103 2");
}
function testLocalBinding() {
    check("Testing Bind to local object");
    var objWithVal = { val: 200 };
    var fLocal = IncrVal.bind(objWithVal);
    Verify("Local length", fLocal.length, 0);
    Verify("Local object1", fLocal(), "201 0");
    Verify("Local object2", fLocal(10), "202 1");
    Verify("Local object3", fLocal(10, 20), "203 2");
    objWithVal = { val: 200 };
    fLocal = IncrVal.bind(objWithVal, 50);
    Verify("local length", fLocal.length, 0);
    Verify("local object", fLocal(), "201 1");
    Verify("local object", fLocal(10), "202 2");
    Verify("local object", fLocal(10, 20), "203 3");
    objWithVal = { val: 200 };
    fLocal = IncrVal.bind(objWithVal, 50, 51);
    Verify("local length", fLocal.length, 0);
    Verify("local object", fLocal(), "201 2");
    Verify("local object", fLocal(10), "202 3");
    Verify("local object", fLocal(10, 20), "203 4");
}
function testBoundLength() {
    check("Testing Length");
    const v234 = new Object();
    var obj = v234;
    function f0() {
    }
    function f1(a238) {
    }
    function f2(a240, a241) {
    }
    function f3(a243, a244, a245) {
    }
    function f4(a247, a248, a249, a250) {
    }
    function f5(a252, a253, a254, a255, a256) {
    }
    var bf0 = f0.bind();
    Verify("1 Length0 ", bf0.length, 0);
    var bf1 = f1.bind();
    Verify("1 Length1 ", bf1.length, 1);
    var bf2 = f2.bind();
    Verify("1 Length2 ", bf2.length, 2);
    var bf3 = f3.bind();
    Verify("1 Length3 ", bf3.length, 3);
    var bf4 = f4.bind();
    Verify("1 Length4 ", bf4.length, 4);
    var bf5 = f5.bind();
    Verify("1 Length5 ", bf5.length, 5);
    bf0 = f0.bind(obj);
    Verify("2 Length0 ", bf0.length, 0);
    bf1 = f1.bind(obj);
    Verify("2 Length1 ", bf1.length, 1);
    bf2 = f2.bind(obj);
    Verify("2 Length2 ", bf2.length, 2);
    bf3 = f3.bind(obj);
    Verify("2 Length3 ", bf3.length, 3);
    bf4 = f4.bind(obj);
    Verify("2 Length4 ", bf4.length, 4);
    bf5 = f5.bind(obj);
    Verify("2 Length5 ", bf5.length, 5);
    bf0 = f0.bind(obj, 10);
    Verify("3 Length0 ", bf0.length, 0);
    bf1 = f1.bind(obj, 10);
    Verify("3 Length1 ", bf1.length, 0);
    bf2 = f2.bind(obj, 10);
    Verify("3 Length2 ", bf2.length, 1);
    bf3 = f3.bind(obj, 10);
    Verify("3 Length3 ", bf3.length, 2);
    bf4 = f4.bind(obj, 10);
    Verify("3 Length4 ", bf4.length, 3);
    bf5 = f5.bind(obj, 10);
    Verify("3 Length5 ", bf5.length, 4);
}
function testConstruction() {
    check("Testing Construction");
    function sum(a363, a364) {
        this.r = a363 + a364;
        return this;
    }
    const v369 = new Object();
    var obj = v369;
    var add10 = sum.bind(obj, 10);
    const v375 = new add10(20);
    var res = v375;
    Verify("Construction ", res.r, 30);
}
var x = 20;
var y = 30;
function testProto() {
    function add() {
        return this.x + this.y;
    }
    Verify("Add Test", add(), 50);
    var o = { x: 5, y: 6 };
    var f = add.bind(o);
    Verify("f Test", f(), 11);
    const v406 = new f();
    var f2 = v406;
    Verify("Proto Test", add.prototype.isPrototypeOf(f2), true);
    var a = decodeURIComponent.bind().toString;
    Verify("Proto toString Test", Function.prototype.bind(), "[object Function]");
}
function testConstruction1() {
    function Point(a425, a426) {
        this.x = a425;
        this.y = a426;
    }
    var p0 = Point.bind();
    const v433 = new p0(0, 1);
    var r0 = v433;
    Verify("TestConstruction0 x", r0.x, 0);
    Verify("TestConstruction0 y", r0.y, 1);
    const v444 = new Object();
    var o1 = v444;
    var p1 = Point.bind(o1);
    const v450 = new p1(100, 101);
    var r1 = v450;
    Verify("TestConstruction1 x", r1.x, 100);
    Verify("TestConstruction1 y", r1.y, 101);
    const v460 = new Object();
    var o2 = v460;
    var p2 = Point.bind(o2, 200);
    const v466 = new p2(201);
    var r2 = v466;
    Verify("TestConstruction2 x", r2.x, 200);
    Verify("TestConstruction2 y", r2.y, 201);
    const v476 = new Object();
    var o3 = v476;
    var p3 = Point.bind(o3, 300, 301);
    const v482 = new p3();
    var r3 = v482;
    Verify("TestConstruction3 x", r3.x, 300);
    Verify("TestConstruction3 y", r3.y, 301);
}
testGlobalBinding();
testLocalBinding();
testBoundLength();
testConstruction();
testProto();
testConstruction1();
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
// #FailureMessage Object: 0x7fe2617f8700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x56511e5d8a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x56511e5d72a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x56511e5cb546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x56511e5cad95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5651200e413e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5651204af7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5651200413eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x56511ffef150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x56511ffebfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x56511fd425d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x56511fd397e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x56511e7b7cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x56511fd3c588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x56511e5dc14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x56511e5e7925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x56511e5d4650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fe26f65dac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fe26f6ef850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 145ms
