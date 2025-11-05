//  --predictable --allow-natives-syntax --interrupt-budget=1024 --maglev --fuzzing

const obj3 = {a:42};
const obj4 = {a:42};
const obj5 = {a:42};
const obj6 = {a:42};
obj5.c = "test";
obj3.a = 13.37;
function foo(arg1,arg2) {
    const obj11 = arg1.e;
    const obj12 = {a:42};
    function inlined_func1() {
        arg1.e = 13.37;
        arg2.g = obj2;
    }
    function inlined_func2() {
        return obj12;
    }
    const obj24 = [13.37];
    const obj26 = [13.37];
    const obj27 = [BigInt,512,obj24,obj24,BigInt,"test",13.37,BigInt,obj26,13.37];
    for (let i = 0; i < 100; i++) {
        const obj31 = inlined_func2(arg1,obj12);
    }
    arg2.d = 42;
}
const obj32 = {a:42};
for (let i = 0; i < 100; i++) {
    foo(obj4,obj32);
}
for (let j = 0; j < 100; j++) {
    foo(1,obj6);
}
const obj43 = foo(obj5,obj32);

// Stderr:
// #
// # Fatal error in ../../src/objects/tagged-impl.h, line 140
// # Debug check failed: kCanBeWeak || (!IsSmi() == HAS_STRONG_HEAP_OBJECT_TAG(ptr_)).
// #
// #
// #
// #FailureMessage Object: 0x7fff41d818a0Receiobjed signal 6
// ==== C stack trace ===============================
//  [0x55db9f3d30fe]
//  [0x7f8c26fc33c0]
//  [0x7f8c26c8d18b]
//  [0x7f8c26c6c859]
//  [0x55db9f3cde8a]
//  [0x55db9f3c49a2]
//  [0x55db9f3c4345]
//  [0x55db9f86204f]
//  [0x55db9f862408]
//  [0x55db9f8672a8]
//  [0x55db9f855bf6]
//  [0x55dba0544457]
//  [0x55dba0543bd1]
//  [0x55db3feabff8]
// [end of stack trace]
