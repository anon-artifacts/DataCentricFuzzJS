function checkSpeciesAccessorDescriptor(a1, a2, a3) {
    var desc = Object.getOwnPropertyDescriptor(a2, a3);
    var msg = "Property " + a3.toString();
    console.log(!(!desc));
    console.log(false, desc.enumerable);
    console.log(true, desc.configurable);
    console.log("function", typeof desc.get);
    console.log(desc.get.name);
    console.log(undefined, desc.set);
}
function getTypedArrayConstructor(a32) {
    return a32.prototype.__proto__.constructor;
}
function verifyHasNotSpecies(a37) {
    console.log(a37.hasOwnProperty(Symbol.species));
    console.log(undefined, a37[Symbol.species]);
}
function t1() {
    verifyHasNotSpecies(Boolean);
    verifyHasNotSpecies(Date);
    verifyHasNotSpecies(Function);
    verifyHasNotSpecies(Math);
    verifyHasNotSpecies(Number);
    verifyHasNotSpecies(Object);
    verifyHasNotSpecies(Proxy);
    verifyHasNotSpecies(Reflect);
    verifyHasNotSpecies(String);
    verifyHasNotSpecies(Symbol);
    verifyHasNotSpecies(WeakMap);
    verifyHasNotSpecies(WeakSet);
}
t1();
function t2() {
    console.log(Array.hasOwnProperty(Symbol.species));
    console.log(Array, Array[Symbol.species]);
    checkSpeciesAccessorDescriptor("Array", Array, Symbol.species);
}
t2();
function t3() {
    class C89 extends Array {
    }
    console.log(C89.hasOwnProperty(Symbol.species));
    console.log(C89, C89[Symbol.species]);
    class C98 {
    }
    class C99 extends C98 {
    }
    console.log(undefined, C98[Symbol.species]);
    console.log(undefined, C99[Symbol.species]);
}
t3();
function t4() {
    console.log(ArrayBuffer.hasOwnProperty(Symbol.species));
    console.log(ArrayBuffer, ArrayBuffer[Symbol.species]);
    checkSpeciesAccessorDescriptor("ArrayBuffer", ArrayBuffer, Symbol.species);
}
t4();
function t5() {
    console.log(Map.hasOwnProperty(Symbol.species));
    console.log(Map, Map[Symbol.species]);
    checkSpeciesAccessorDescriptor("Map", Map, Symbol.species);
}
t5();
function t6() {
    console.log(Promise.hasOwnProperty(Symbol.species));
    console.log(Promise, Promise[Symbol.species]);
    checkSpeciesAccessorDescriptor("Promise", Promise, Symbol.species);
}
t6();
function t7() {
    console.log(RegExp.hasOwnProperty(Symbol.species));
    console.log(RegExp, RegExp[Symbol.species]);
    checkSpeciesAccessorDescriptor("RegExp", RegExp, Symbol.species);
}
t7();
function t8() {
    console.log(Set.hasOwnProperty(Symbol.species));
    console.log(Set, Set[Symbol.species]);
    checkSpeciesAccessorDescriptor("Set", Set, Symbol.species);
}
t8();
function t9() {
    let TypedArray = getTypedArrayConstructor(Int8Array);
    console.log(TypedArray.hasOwnProperty(Symbol.species));
    checkSpeciesAccessorDescriptor("TypedArray", TypedArray, Symbol.species);
    console.log(Int8Array.hasOwnProperty(Symbol.species));
    console.log(Int8Array, Int8Array[Symbol.species]);
}
t9();
function t10() {
    let TypedArray = getTypedArrayConstructor(Uint8Array);
    console.log(TypedArray.hasOwnProperty(Symbol.species));
    checkSpeciesAccessorDescriptor("TypedArray", TypedArray, Symbol.species);
    console.log(Uint8Array.hasOwnProperty(Symbol.species));
    console.log(Uint8Array, Uint8Array[Symbol.species]);
}
t10();
function t11() {
    let TypedArray = getTypedArrayConstructor(Uint8ClampedArray);
    console.log(TypedArray.hasOwnProperty(Symbol.species));
    checkSpeciesAccessorDescriptor("TypedArray", TypedArray, Symbol.species);
    console.log(Uint8ClampedArray.hasOwnProperty(Symbol.species));
    console.log(Uint8ClampedArray, Uint8ClampedArray[Symbol.species]);
}
t11();
function t12() {
    let TypedArray = getTypedArrayConstructor(Int16Array);
    console.log(TypedArray.hasOwnProperty(Symbol.species));
    checkSpeciesAccessorDescriptor("TypedArray", TypedArray, Symbol.species);
    console.log(Int16Array.hasOwnProperty(Symbol.species));
    console.log(Int16Array, Int16Array[Symbol.species]);
}
t12();
function t13() {
    let TypedArray = getTypedArrayConstructor(Uint16Array);
    console.log(TypedArray.hasOwnProperty(Symbol.species));
    checkSpeciesAccessorDescriptor("TypedArray", TypedArray, Symbol.species);
    console.log(Uint16Array.hasOwnProperty(Symbol.species));
    console.log(Uint16Array, Uint16Array[Symbol.species]);
}
t13();
function t14() {
    let TypedArray = getTypedArrayConstructor(Int32Array);
    console.log(TypedArray.hasOwnProperty(Symbol.species));
    checkSpeciesAccessorDescriptor("TypedArray", TypedArray, Symbol.species);
    console.log(Int32Array.hasOwnProperty(Symbol.species));
    console.log(Int32Array, Int32Array[Symbol.species]);
}
t14();
function t15() {
    let TypedArray = getTypedArrayConstructor(Uint32Array);
    console.log(TypedArray.hasOwnProperty(Symbol.species));
    checkSpeciesAccessorDescriptor("TypedArray", TypedArray, Symbol.species);
    console.log(Uint32Array.hasOwnProperty(Symbol.species));
    console.log(Uint32Array, Uint32Array[Symbol.species]);
}
t15();
function t16() {
    let TypedArray = getTypedArrayConstructor(Float32Array);
    console.log(TypedArray.hasOwnProperty(Symbol.species));
    checkSpeciesAccessorDescriptor("TypedArray", TypedArray, Symbol.species);
    console.log(Float32Array.hasOwnProperty(Symbol.species));
    console.log(Float32Array, Float32Array[Symbol.species]);
}
t16();
function t17() {
    let TypedArray = getTypedArrayConstructor(Float64Array);
    console.log(TypedArray.hasOwnProperty(Symbol.species));
    checkSpeciesAccessorDescriptor("TypedArray", TypedArray, Symbol.species);
    console.log(Float64Array.hasOwnProperty(Symbol.species));
    console.log(Float64Array, Float64Array[Symbol.species]);
}
t17();
