var BUGNUMBER = 1264941;
var summary = "CloneArrayBuffer should be called with byteLength of source typedArray";
print((BUGNUMBER + ": ") + summary);
function test(a10, a11) {
    const v12 = new a10(a11);
    var abuf = v12;
    abuf.byteLength;
    for (const v18 of [0,16]) {
        for (let i20 = 0; i20 < ((a11 - v18) / Float64Array.BYTES_PER_ELEMENT); i20++) {
            const v30 = new Float64Array(abuf, v18, i20);
            var a1 = v30;
            a1.buffer.byteLength;
            a1.byteLength;
            i20 * Float64Array.BYTES_PER_ELEMENT;
            a1.byteOffset;
            const v38 = new Float64Array(a1);
            var a2 = v38;
            a2.buffer.byteLength;
            a1.byteLength;
            a2.byteLength;
            a1.byteLength;
            a2.byteOffset;
        }
    }
}
test(ArrayBuffer, 16);
test(ArrayBuffer, 128);
class C52 extends ArrayBuffer {
}
test(C52, 16);
test(C52, 128);
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
