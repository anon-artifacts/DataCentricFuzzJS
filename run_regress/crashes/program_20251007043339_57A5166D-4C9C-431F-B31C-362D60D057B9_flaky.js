var shouldBailout = false;
var GiantPrintArray = [];
var reuseObjects = false;
var PolymorphicFuncObjArr = [];
var PolyFuncArr = [];
function GetPolymorphicFunction() {
    if (PolyFuncArr.length > 1) {
        var myFunc = PolyFuncArr.shift();
        PolyFuncArr.push(myFunc);
        return myFunc;
    } else {
        return PolyFuncArr[0];
    }
}
function GetObjectwithPolymorphicFunction() {
    if (reuseObjects) {
        if (PolymorphicFuncObjArr.length > 1) {
            var myFunc = PolymorphicFuncObjArr.shift();
            PolymorphicFuncObjArr.push(myFunc);
            return myFunc;
        } else {
            return PolymorphicFuncObjArr[0];
        }
    } else {
        var obj = {};
        obj.polyfunc = GetPolymorphicFunction();
        PolymorphicFuncObjArr.push(obj);
        return obj;
    }
}
function InitPolymorphicFunctionArray() {
    for (let i32 = 0; i32 < arguments.length; i32++) {
        PolyFuncArr.push(arguments[i32]);
    }
}
function getFirst23Elements(a43, a44, a45) {
    return a44 < 23;
}
function sumOfArrayElements(a49, a50, a51, a52) {
    return a49 + a50;
}
function test0() {
    var obj0 = {};
    var obj1 = {};
    var arrObj0 = {};
    function f61() {
        var __loopvar3 = 0;
        for (const v65 in i16) {
            if (v65.indexOf("method") != -1) {
                continue;
            }
            if (__loopvar3++ > 3) {
                break;
            }
            c = 1;
            obj1 = obj0;
            arrObj0 = obj0;
        }
        e = ary.unshift(f, c, arrObj0.length, arrObj0.length, c, f, g, f, a, h, __loopvar3, h, this.prop0, arrObj0.prop0, obj1.length);
    }
    var func2 = f61;
    obj0.method0 = func2;
    arrObj0.method0 = func2;
    const v93 = new Array(10);
    var ary = v93;
    const v97 = new Int16Array(256);
    var i16 = v97;
    var a = 1;
    var e = 1;
    var f = 1;
    var g = 1;
    var h = 1;
    obj0.length = 1;
    function bar0() {
        const v122 = ~arrObj0.method0.call(obj1) * (1 instanceof (typeof Number == "function" ? Number : Object));
        obj1.prop0 &= 1;
        h /= (v122 - 1) + -(1 & obj0.prop1);
    }
    function bar1() {
        e <<= bar0.call(obj0);
        bar0.call(obj0);
    }
    var __protoObj2_proto = {};
    __protoObj2_proto.x = Math.pow(bar1(), 1);
    var __protoObj1__proto = Object.create(__protoObj2_proto);
    var __protoinstanceobj__proto = Object.create(__protoObj1__proto);
    var __varforproto = __protoinstanceobj__proto.x + __protoinstanceobj__proto.x;
    __varforproto += __protoinstanceobj__proto.x + __protoinstanceobj__proto.x;
    __varforproto += __protoinstanceobj__proto.x + __protoinstanceobj__proto.x;
    GiantPrintArray.push(__varforproto);
    if (shouldBailout) {
        __protoObj1__proto.__proto__ = { x: "hello" };
    }
    __varforproto += __protoinstanceobj__proto.x + __protoinstanceobj__proto.x;
    GiantPrintArray.push(__varforproto);
    print("sumOfary = " + ary.filter(getFirst23Elements).reduce(sumOfArrayElements, 0));
}
test0();
test0();
test0();
test0();
runningJITtedCode = true;
test0();
shouldBailout = true;
test0();
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
// #FailureMessage Object: 0x7f73b04a4700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x563505f35a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x563505f342a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x563505f28546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x563505f27d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x563507a4113e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x563507e0c7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x56350799e3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x56350794c150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x563507948fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x56350769f5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5635076967e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x563506114cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x563507699588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x563505f3914f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x563505f44925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x563505f31650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f73ba05cac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f73ba0ee850]
// Received signal 6
// STDOUT:
// sumOfary = 21
// sumOfary = 21
// sumOfary = 21
// sumOfary = 21
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 212ms
