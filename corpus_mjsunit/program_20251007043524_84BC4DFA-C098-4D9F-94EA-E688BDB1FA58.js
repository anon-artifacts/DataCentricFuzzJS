var constructors = [Uint8Array,Int8Array,Uint16Array,Int16Array,Uint32Array,Int32Array,Float32Array,Float64Array,Uint8ClampedArray];
var TypedArrayPrototype = Uint8Array.prototype.__proto__;
TypedArrayPrototype.hasOwnProperty("entries");
TypedArrayPrototype.hasOwnProperty("values");
TypedArrayPrototype.hasOwnProperty("keys");
TypedArrayPrototype.hasOwnProperty(Symbol.iterator);
TypedArrayPrototype.propertyIsEnumerable("entries");
TypedArrayPrototype.propertyIsEnumerable("values");
TypedArrayPrototype.propertyIsEnumerable("keys");
TypedArrayPrototype.propertyIsEnumerable(Symbol.iterator);
Array.prototype.entries === TypedArrayPrototype.entries;
Array.prototype[Symbol.iterator] === TypedArrayPrototype.values;
Array.prototype.keys === TypedArrayPrototype.keys;
Array.prototype[Symbol.iterator] === TypedArrayPrototype[Symbol.iterator];
function TestTypedArrayValues(a52) {
    var array = [1,2,3];
    var i = 0;
    const v60 = new a52(array);
    for (const v61 of v60) {
        array[i++];
    }
    array.length;
}
constructors.forEach(TestTypedArrayValues);
