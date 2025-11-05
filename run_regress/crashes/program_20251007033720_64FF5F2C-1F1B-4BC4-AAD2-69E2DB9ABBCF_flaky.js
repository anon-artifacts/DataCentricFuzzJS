function f0() {
}
function write(a2) {
    f0(a2 + "");
}
function PrintDescriptor(a7, a8) {
    const v12 = (a7 + ":configurable : ") + a8?.configurable;
    try { write(v12); } catch (e) {}
    const v17 = (a7 + ":enumerable   : ") + a8?.enumerable;
    try { write(v17); } catch (e) {}
    const v22 = (a7 + ":writable     : ") + a8?.writable;
    try { write(v22); } catch (e) {}
    const v27 = (a7 + ":getter       : ") + a8?.get;
    try { write(v27); } catch (e) {}
    const v32 = (a7 + ":setter       : ") + a8?.set;
    try { write(v32); } catch (e) {}
    const v37 = (a7 + ":value        : ") + a8?.value;
    try { write(v37); } catch (e) {}
}
function exceptToString(a40) {
    if (a40 instanceof TypeError) {
        return "TypeError";
    }
    if (a40 instanceof ReferenceError) {
        return "ReferenceError";
    }
    if (a40 instanceof EvalError) {
        return "EvalError";
    }
    if (a40 instanceof SyntaxError) {
        return "SyntaxError";
    }
    return "Unknown Error";
}
function Test1() {
    'use strict';
    var str = "function.caller get";
    try {
        Test1?.caller;
    } catch(e59) {
        const v63 = ("Exception: " + str) + " ";
        let v64;
        try { v64 = exceptToString(e59); } catch (e) {}
        const v65 = v63 + v64;
        try { write(v65); } catch (e) {}
        return;
    }
    write("Return: " + str);
}
Test1();
function Test2() {
    'use strict';
    var str = "function.caller set";
    try {
        Test2.caller = 10;
    } catch(e76) {
        write((("Exception: " + str) + " ") + exceptToString(e76));
        return;
    }
    const v85 = "Return: " + str;
    try { write(v85); } catch (e) {}
}
Test2();
function Test3() {
    'use strict';
    var str = "function.arguments get";
    try {
        Test3?.arguments;
    } catch(e93) {
        const v97 = ("Exception: " + str) + " ";
        let v98;
        try { v98 = exceptToString(e93); } catch (e) {}
        const v99 = v97 + v98;
        try { write(v99); } catch (e) {}
        return;
    }
    write("Return: " + str);
}
Test3();
function Test4() {
    'use strict';
    var str = "function.arguments set";
    try {
        Test4.arguments = 10;
    } catch(e110) {
        write((("Exception: " + str) + " ") + exceptToString(e110));
        return;
    }
    const v119 = "Return: " + str;
    try { write(v119); } catch (e) {}
}
Test4();
function Test5() {
    'use strict';
    var str = "function.arguments and function.caller descriptors are undefined";
    function f125() {
    }
    let v128;
    try { v128 = Object.getOwnPropertyDescriptor(f125, "caller"); } catch (e) {}
    var callerDescriptor = v128;
    function f130() {
    }
    let v132;
    try { v132 = Object.getOwnPropertyDescriptor(f130, "arguments"); } catch (e) {}
    var argumentsDescriptor = v132;
    const v145 = (((("Return: " + (callerDescriptor === undefined)) + " ") + (argumentsDescriptor === undefined)) + ": ") + str;
    try { write(v145); } catch (e) {}
}
Test5();
function Test5() {
    'use strict';
    var str = "arguments.caller and arguments.callee are equal/strictEqual to each other";
    var argumentsCallerGet = Object.getOwnPropertyDescriptor(arguments, "caller")?.get;
    var argumentsCallerSet = Object.getOwnPropertyDescriptor(arguments, "caller")?.set;
    var argumentsCalleeGet = Object.getOwnPropertyDescriptor(arguments, "callee").get;
    var argumentsCalleeSet = Object.getOwnPropertyDescriptor(arguments, "callee").set;
    write((((("Return: " + (((argumentsCallerGet == argumentsCalleeGet) && (argumentsCallerSet == argumentsCalleeSet)) && (argumentsCallerGet == argumentsCallerSet)).toString()) + " ") + (((argumentsCallerGet === argumentsCalleeGet) && (argumentsCallerSet === argumentsCalleeSet)) && (argumentsCallerGet === argumentsCallerSet)).toString()) + ": ") + str);
}
Test5();
function Test6() {
    var str = "function.caller's value is a strict mode function";
    function foo() {
        'use strict';
        return goo();
    }
    function goo() {
        return goo.caller;
    }
    try {
        foo();
    } catch(e203) {
        const v207 = ("Exception: " + str) + " ";
        let v208;
        try { v208 = exceptToString(e203); } catch (e) {}
        const v209 = v207 + v208;
        try { write(v209); } catch (e) {}
        return;
    }
    write("Return: " + str);
}
Test6();
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
// #FailureMessage Object: 0x7f5a6ab35700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5566e652ca82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5566e652b2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5566e651f546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5566e651ed95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5566e803813e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5566e84037a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5566e7f953eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5566e7f43150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5566e7f3ffd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5566e7c965d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5566e7c8d7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5566e670bcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5566e7c90588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5566e653014f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5566e653b925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5566e6528650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f5a786f5ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f5a78787850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 109ms
