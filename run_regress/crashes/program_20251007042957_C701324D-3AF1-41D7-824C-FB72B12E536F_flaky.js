function TestObjectForFoo1() {
}
function makeObjectForFoo1a() {
    const v2 = new TestObjectForFoo1();
    return v2;
}
function foo1(a4, a5) {
    a4.x = 100;
    if (!a5) {
        a4.y = 200;
    }
    a4.z = 300;
    var sum = 0;
    for (const v12 in a4) {
        print((v12 + ": ") + a4[v12]);
        sum += a4[v12];
    }
    return sum;
}
print(foo1(makeObjectForFoo1a(), false));
print(foo1(makeObjectForFoo1a(), true));
function makeObjectForFoo1b() {
    const v30 = new TestObjectForFoo1();
    var o = v30;
    o.x = 0;
    o.y = 0;
    o.z = 0;
    const v35 = new TestObjectForFoo1();
    return v35;
}
function foo1(a37, a38) {
    a37.x = 100;
    if (!a38) {
        a37.y = 200;
    }
    a37.z = 300;
    var sum = 0;
    for (const v45 in a37) {
        print((v45 + ": ") + a37[v45]);
        sum += a37[v45];
    }
    return sum;
}
print(foo1(makeObjectForFoo1b(), false));
print(foo1(makeObjectForFoo1b(), true));
function TestObjectForFoo2() {
}
function makeObjectForFoo2a() {
    const v62 = new TestObjectForFoo2();
    return v62;
}
function foo2a(a64, a65) {
    a64.x = 100;
    if (!a65) {
        a64.y = 200;
    }
    a64.z = 300;
    a64.y = 500;
    var sum = 0;
    for (const v73 in a64) {
        print((v73 + ": ") + a64[v73]);
        sum += a64[v73];
    }
    return sum;
}
print(foo2a(makeObjectForFoo2a(), false));
print(foo2a(makeObjectForFoo2a(), true));
function makeObjectForFoo2b() {
    const v89 = new TestObjectForFoo2();
    var o = v89;
    o.x = 0;
    o.y = 0;
    o.z = 0;
    const v94 = new TestObjectForFoo2();
    return v94;
}
function foo2b(a96, a97) {
    a96.x = 100;
    if (!a97) {
        a96.y = 200;
    }
    a96.z = 300;
    a96.y = 500;
    var sum = 0;
    for (const v105 in a96) {
        print((v105 + ": ") + a96[v105]);
        sum += a96[v105];
    }
    return sum;
}
print(foo2b(makeObjectForFoo2b(), false));
print(foo2b(makeObjectForFoo2b(), true));
function TestObjectForFoo3() {
}
function makeObjectForFoo3a() {
    const v122 = new TestObjectForFoo3();
    return v122;
}
function foo3(a124, a125) {
    a124.p1 = 1;
    const v127 = !a125;
    a124.p5 = 100;
    a124.p2 = v127 ? 100 : 100;
    if (a125) {
        a124.p3 = 2;
    }
    a124.p4 = 3;
    for (const v133 in a124) {
        print((v133 + ":") + a124[v133]);
    }
    print("END");
    print("");
}
foo3(makeObjectForFoo3a(), true);
foo3(makeObjectForFoo3a(), false);
function makeObjectForFoo3b() {
    const v150 = new TestObjectForFoo3();
    var o = v150;
    o.p1 = 0;
    o.p2 = 0;
    o.p3 = 0;
    o.p4 = 0;
    const v156 = new TestObjectForFoo3();
    return v156;
}
function foo3(a158, a159) {
    a158.p1 = 1;
    const v161 = !a159;
    a158.p5 = 100;
    a158.p2 = v161 ? 100 : 100;
    if (a159) {
        a158.p3 = 2;
    }
    a158.p4 = 3;
    for (const v167 in a158) {
        print((v167 + ":") + a158[v167]);
    }
    print("END");
    print("");
}
foo3(makeObjectForFoo3a(), true);
foo3(makeObjectForFoo3a(), false);
function test5() {
    function f184() {
    }
    var window = f184;
    const v187 = Math.pow();
    const v191 = {
        z: v187,
        set b(a190) {
        },
        b: 4277,
        z: window,
    };
    z = v191;
}
test5();
test5();
test5();
test5();
test5();
function printAll(a199, a200) {
    for (const v201 in a200) {
        printAll(a199, a200[v201]);
    }
}
printAll("this", this);
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
// #FailureMessage Object: 0x7f6b8e7fa700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x560ef77cfa82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x560ef77ce2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x560ef77c2546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x560ef77c1d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x560ef92db13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x560ef96a67a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x560ef92383eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x560ef91e6150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x560ef91e2fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x560ef8f395d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x560ef8f307e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x560ef79aecb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x560ef8f33588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x560ef77d314f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x560ef77de925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x560ef77cb650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f6b9ec33ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f6b9ecc5850]
// Received signal 6
// STDOUT:
// x: 100
// y: 200
// z: 300
// 600
// x: 100
// z: 300
// 400
// x: 100
// y: 200
// z: 300
// 600
// x: 100
// z: 300
// 400
// x: 100
// y: 500
// z: 300
// 900
// x: 100
// z: 300
// y: 500
// 900
// x: 100
// y: 500
// z: 300
// 900
// x: 100
// z: 300
// y: 500
// 900
// p1:1
// p5:100
// p2:100
// p3:2
// p4:3
// END
// 
// p1:1
// p5:100
// p2:100
// p4:3
// END
// 
// p1:1
// p5:100
// p2:100
// p3:2
// p4:3
// END
// 
// p1:1
// p5:100
// p2:100
// p4:3
// END
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 338ms
