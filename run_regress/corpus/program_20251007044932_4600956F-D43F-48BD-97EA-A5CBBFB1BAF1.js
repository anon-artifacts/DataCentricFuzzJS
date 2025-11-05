const intArrayConstructors = [Uint8Array,Int8Array,Uint16Array,Int16Array,Uint32Array,Int32Array,Uint8ClampedArray];
const floatArrayConstructors = [Float32Array,Float64Array];
const typedArrayConstructors = [...intArrayConstructors,...floatArrayConstructors];
for (const v15 of typedArrayConstructors) {
    const v19 = new v15([2,2]);
    let array = v19;
    array.length;
    Object.defineProperty(array, "length", { value: 5 });
    Array.prototype.fill.call(array, 5);
    [5,5];
    [array[0],array[1]];
    array[2];
}
