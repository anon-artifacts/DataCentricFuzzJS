function guarded_call(a1) {
    try {
        a1();
    } catch(e3) {
        print((e3.name + " : ") + e3.message);
    }
}
var testCount = 0;
function scenario(a14, a15) {
    if (testCount > 0) {
        print("\n");
    }
    print(testCount++ + ".", a14);
    guarded_call(a15);
}
function printLines(a28, a29) {
    if (a29) {
        a28.sort();
    }
    for (let i32 = 0; i32 < a28.length; i32++) {
        print(a28[i32]);
    }
}
function dumpProp(a42) {
    var lines = [];
    var names = Object.getOwnPropertyNames(a42);
    for (const v48 in names) {
        var name = names[v48];
        var desc = Object.getOwnPropertyDescriptor(a42, name);
        var s = (("  " + name) + ": ") + a42[name];
        if (desc.enumerable) {
            s += " enumerable";
        }
        if (desc.configurable) {
            s += " configurable";
        }
        if (desc.writable) {
            s += " writable";
        }
        if (desc.getter) {
            s += " getter";
        }
        if (desc.setter) {
            s += " setter";
        }
        lines.push(s);
    }
    printLines(lines);
}
function enumObj(a73) {
    var lines = [];
    for (const v76 in a73) {
        if (!a73[500]) {
            a73[500] = "Should not enumerate 500";
            a73[600] = "Should not enumerate 600";
            function f82() {
                return "Should not enumerate 700";
            }
            Object.defineProperty(a73, "700", { get: f82, enumerable: true, configurable: true });
        }
        lines.push((("  " + v76) + ": ") + a73[v76]);
    }
    printLines(lines);
}
function addProp(a98, a99) {
    const v101 = a99 + "10";
    Object.defineProperty(a98, v101, { value: "value 10" });
    const v107 = a99 + "11";
    Object.defineProperty(a98, v107, { value: "value 11", enumerable: true });
    const v113 = a99 + "12";
    Object.defineProperty(a98, v113, { value: "value 12", enumerable: true, configurable: true });
    const v120 = a99 + "13";
    Object.defineProperty(a98, v120, { value: "value 13", enumerable: true, configurable: true, writable: true });
    const v128 = a99 + "20";
    function f129() {
        return "get 20";
    }
    Object.defineProperty(a98, v128, { get: f129 });
    const v134 = a99 + "21";
    function f135() {
        return "get 21";
    }
    Object.defineProperty(a98, v134, { get: f135, enumerable: true });
    const v141 = a99 + "22";
    function f142() {
        return "get 22";
    }
    Object.defineProperty(a98, v141, { get: f142, enumerable: true, configurable: true });
    const v149 = a99 + "25";
    function f150() {
        print("do not call 25");
    }
    Object.defineProperty(a98, v149, { set: f150 });
    const v157 = a99 + "26";
    function f158() {
        print("do not call 26");
    }
    Object.defineProperty(a98, v157, { set: f158, enumerable: true });
    const v166 = a99 + "27";
    function f167() {
        print("do not call 27");
    }
    Object.defineProperty(a98, v166, { set: f167, enumerable: true, configurable: true });
}
function testWithObj(a176) {
    addProp(a176, "xx");
    addProp(a176, "1");
    print("  --- properties ---");
    dumpProp(a176);
    print("  --- for-in enumerate ---");
    enumObj(a176);
}
function f189() {
    const v191 = -12;
    testWithObj({ abc: v191, def: "hello", 1: undefined, 3: null });
}
scenario("Test with object", f189);
function f199() {
    testWithObj([-12,"hello",,null]);
}
scenario("Test with array", f199);
function testPrototype(a209) {
    const v211 = { value: "SHOULD_NOT_enumerate_prototype" };
    function f212() {
        return "get 0";
    }
    const v214 = { get: f212 };
    const v216 = { value: 3 };
    function f217() {
        return "get 1";
    }
    const v220 = { get: f217, enumerable: true };
    const v223 = { value: 5, enumerable: true };
    function f224() {
        return this.name;
    }
    const v228 = { get: f224, enumerable: true };
    const v229 = {
        name: v211,
        0: v214,
        3: v216,
        1: v220,
        5: v223,
        2: v228,
    };
    Object.defineProperties(a209, v229);
    const v233 = { value: "correct_original_instance" };
    function f234() {
        return "get 10";
    }
    const v236 = { get: f234 };
    const v238 = { value: 13 };
    function f239() {
        return "get 11";
    }
    const v242 = { get: f239, enumerable: true };
    const v245 = { value: 15, enumerable: true };
    function f246() {
        return this.name;
    }
    const v250 = { get: f246, enumerable: true };
    const v251 = {
        name: v233,
        10: v236,
        13: v238,
        11: v242,
        15: v245,
        12: v250,
    };
    var o = Object.create(a209, v251);
    print("*** Prototype ***");
    dumpProp(a209);
    print("*** Object ***");
    dumpProp(o);
    print("*** for in ***");
    enumObj(o);
}
function f265() {
    testPrototype({});
}
scenario("Test prototype with object", f265);
function f270() {
    testPrototype([]);
}
scenario("Test prototype with array", f270);
function testStr(a275) {
    function f276() {
        a275[0] = "x";
        print(" ", 0, a275[0]);
    }
    guarded_call(f276);
    function f284() {
        Object.defineProperty(a275, 1, { value: "y" });
        print(" ", 1, a275[1]);
    }
    guarded_call(f284);
    function f296() {
        function f298() {
            return "z";
        }
        Object.defineProperty(a275, 2, { get: f298 });
        print(" ", 2, a275[2]);
    }
    guarded_call(f296);
    function f309() {
        a275[6] = "6";
        print(" ", 6, a275[6]);
    }
    guarded_call(f309);
    function f317() {
        function f319() {
            return "7";
        }
        Object.defineProperty(a275, 7, { get: f319, enumerable: true });
        print(" ", 7, a275[7]);
    }
    guarded_call(f317);
    function f331() {
        print("  --- Properties ---");
        dumpProp(a275);
    }
    guarded_call(f331);
    function f337() {
        print("  --- Enumerate ---");
        enumObj(a275);
    }
    guarded_call(f337);
}
function f344() {
    testStr("abcd");
}
scenario("Test String with String value", f344);
function f349() {
    const v352 = new String("abcd");
    testStr(v352);
}
scenario("Test String with String object", f349);
function f356() {
    var array = [4,5,6];
    for (const v362 in array) {
        print(v362);
    }
    function f366() {
        return 34;
    }
    Object.defineProperty(array, "8", { get: f366, enumerable: true });
    for (const v372 in array) {
        print(v372);
    }
}
scenario("Testing forin caching when forin changes from array to Es5array", f356);
function f377() {
    function printAll() {
        for (const v381 in arguments[0]) {
            print((v381 + ":") + arguments[0][v381]);
        }
    }
    printAll(Object.getOwnPropertyDescriptor(RegExp, "length"));
    printAll(Object.getOwnPropertyDescriptor(String, "length"));
    printAll(Object.getOwnPropertyDescriptor(Boolean, "length"));
    printAll(Object.getOwnPropertyDescriptor(Number, "length"));
    printAll(Object.getOwnPropertyDescriptor(Object, "length"));
}
scenario("Testing RegExp Number String Boolean Object Constructor length property attributes", f377);
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
// #FailureMessage Object: 0x7f47c658d700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55d81aab1a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55d81aab02a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55d81aaa4546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55d81aaa3d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55d81c5bd13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55d81c9887a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55d81c51a3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55d81c4c8150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55d81c4c4fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55d81c21b5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55d81c2127e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55d81ac90cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55d81c215588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55d81aab514f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55d81aac0925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55d81aaad650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f47d5950ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f47d59e2850]
// Received signal 6
// STDOUT:
// 0. Test with object
//   --- properties ---
//   1: undefined enumerable configurable writable
//   3: null enumerable configurable writable
//   110: value 10
//   111: value 11 enumerable
//   112: value 12 enumerable configurable
//   113: value 13 enumerable configurable writable
//   120: get 20
//   121: get 21 enumerable
//   122: get 22 enumerable configurable
//   125: undefined
//   126: undefined enumerable
//   127: undefined enumerable configurable
//   abc: -12 enumerable configurable writable
//   def: hello enumerable configurable writable
//   xx10: value 10
//   xx11: value 11 enumerable
//   xx12: value 12 enumerable configurable
//   xx13: value 13 enumerable configurable writable
//   xx20: get 20
//   xx21: get 21 enumerable
//   xx22: get 22 enumerable configurable
//   xx25: undefined
//   xx26: undefined enumerable
//   xx27: undefined enumerable configurable
//   --- for-in enumerate ---
//   1: undefined
//   3: null
//   111: value 11
//   112: value 12
//   113: value 13
//   121: get 21
//   122: get 22
//   126: undefined
//   127: undefined
//   abc: -12
//   def: hello
//   xx11: value 11
//   xx12: value 12
//   xx13: value 13
//   xx21: get 21
//   xx22: get 22
//   xx26: undefined
//   xx27: undefined
// 
// 
// 1. Test with array
//   --- properties ---
//   0: -12 enumerable configurable writable
//   1: hello enumerable configurable writable
//   3: null enumerable configurable writable
//   110: value 10
//   111: value 11 enumerable
//   112: value 12 enumerable configurable
//   113: value 13 enumerable configurable writable
//   120: get 20
//   121: get 21 enumerable
//   122: get 22 enumerable configurable
//   125: undefined
//   126: undefined enumerable
//   127: undefined enumerable configurable
//   length: 128 writable
//   xx10: value 10
//   xx11: value 11 enumerable
//   xx12: value 12 enumerable configurable
//   xx13: value 13 enumerable configurable writable
//   xx20: get 20
//   xx21: get 21 enumerable
//   xx22: get 22 enumerable configurable
//   xx25: undefined
//   xx26: undefined enumerable
//   xx27: undefined enumerable configurable
//   --- for-in enumerate ---
//   0: -12
//   1: hello
//   3: null
//   111: value 11
//   112: value 12
//   113: value 13
//   121: get 21
//   122: get 22
//   126: undefined
//   127: undefined
//   xx11: value 11
//   xx12: value 12
//   xx13: value 13
//   xx21: get 21
//   xx22: get 22
//   xx26: undefined
//   xx27: undefined
// 
// 
// 2. Test prototype with object
// *** Prototype ***
//   0: get 0
//   1: get 1 enumerable
//   2: SHOULD_NOT_enumerate_prototype enumerable
//   3: 3
//   5: 5 enumerable
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 227ms
