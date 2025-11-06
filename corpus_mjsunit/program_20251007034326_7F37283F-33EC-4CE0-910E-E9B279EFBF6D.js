let TypedArray = Uint8Array.__proto__;
let classesWithSpecies = [RegExp,Array,TypedArray,ArrayBuffer,Map,Set,Promise];
let classesWithoutSpecies = [Object,Function,String,Number,Symbol,WeakMap,WeakSet];
for (const v20 of classesWithSpecies) {
    v20[Symbol.species];
    function f23() {
        v20[Symbol.species] = undefined;
    }
    f23();
    let descriptor = Object.getOwnPropertyDescriptor(v20, Symbol.species);
    descriptor.configurable;
    descriptor.enumerable;
    descriptor.writable;
    descriptor.set;
    typeof descriptor.get;
}
classesWithSpecies.length;
const v41 = (a42) => {
    return Object.getOwnPropertyDescriptor(a42, Symbol.species).get;
};
const v47 = new Set(classesWithSpecies.map(v41));
v47.size;
for (const v49 of classesWithoutSpecies) {
    v49[Symbol.species];
}
