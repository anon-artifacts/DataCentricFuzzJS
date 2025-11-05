const v1 = new Float32Array();
function f2(a3, a4) {
    const v5 = a3[0];
    const v6 = a3[2];
    const v7 = a3[3];
    const v8 = a3[4];
    const v9 = a3[5];
    const v10 = a3[6];
    const v11 = a3[7];
    const v12 = a3[8];
    const v13 = a3[9];
    const v14 = a3[10];
    const v15 = a3[11];
    const v16 = a3[12];
    const v17 = a3[536870912];
    const v18 = a3[36];
    return (((((((((((((a4 + v5) & v18) + v6) + v7) + v8) + v9) && v10) + v11) + v12) + v13) + v14) + v15) + v16) + v17;
}
f2(v1);
f2(v1);
const v35 = % OptimizeFunctionOnNextCall(f2);
f2();
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// #
// # Fatal error in ../../src/compiler/backend/ia32/instruction-selector-ia32.cc, line 550
// # Debug check failed: op.input_count >= 2 (1 vs. 2).
// #
// #
// #
// #FailureMessage Object: 0xffffbca0
// ==== C stack trace ===============================
// 
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x75cc45) [0x56cb1c45]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x75b353) [0x56cb0353]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x74b9c4) [0x56ca09c4]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x74b266) [0x56ca0266]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x74ba35) [0x56ca0a35]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x2e69183) [0x593be183]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x2e53cc9) [0x593a8cc9]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x2e5399c) [0x593a899c]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x2d573dc) [0x592ac3dc]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x2d4b7aa) [0x592a07aa]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x2d4a12f) [0x5929f12f]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x2d6b85c) [0x592c085c]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x328760b) [0x597dc60b]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x25ef299) [0x58b44299]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x25e37d7) [0x58b387d7]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x25db3cb) [0x58b303cb]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x25d95dd) [0x58b2e5dd]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0xa08869) [0x56f5d869]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0xa2f7ec) [0x56f847ec]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0xa1bf37) [0x56f70f37]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0xa1e83f) [0x56f7383f]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x1b0883b) [0x5805d83b]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x1b08130) [0x5805d130]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x3aaddad) [0x5a002dad]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x3a25ff6) [0x59f7aff6]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x3a25f24) [0x59f7af24]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x3a23d99) [0x59f78d99]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x3a23c0d) [0x59f78c0d]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0xc75c59) [0x571cac59]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0xc78848) [0x571cd848]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x77eef0) [0x56cd3ef0]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x77e9ef) [0x56cd39ef]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x6685d1) [0x56bbd5d1]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x688716) [0x56bdd716]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x68e136) [0x56be3136]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x68d9f1) [0x56be29f1]
//     /home/test/v8/v8/out/fuzzbuild32/d8(+0x6913ce) [0x56be63ce]
//     /lib/i386-linux-gnu/libc.so.6(+0x21519) [0xf7c21519]
// Received signal 6
// STDOUT:
// [COV] edge counters initialized. Shared memory: shm_id_2913054_4 with 1111217 edges
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --profile=v8 --timeout=500 --storagePath=./fuzz_output32 --jobs=80 --argumentRandomization --importCorpus=./web_tests/fuzz_input /home/test/v8/v8/out/fuzzbuild32/d8 --staticCorpus
// TARGET ARGS: /home/test/v8/v8/out/fuzzbuild32/d8 --expose-gc --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --harmony --js-staging --turboshaft-csa
// CONTRIBUTORS: SuperPropertyAssignmentGenerator, InputMutator (type aware), IntegerGenerator, ConstructorCallGenerator, ClassStaticInitializerGenerator, ClassInstancePropertyGenerator, ClassInstanceComputedPropertyGenerator, ClassConstructorGenerator, StringGenerator, OperationMutator, BigIntGenerator, TypedArrayGenerator, ClassDefinitionGenerator, UpdateGenerator
// EXECUTION TIME: 153ms
