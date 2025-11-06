function intLength(a1, a2) {
    var res = 0;
    for (let i6 = 0; i6 < a2; i6++) {
        res += a1.length;
    }
    return res / a2;
}
function valueLength(a14, a15) {
    var res = 0;
    for (let i19 = 0; i19 < a15; i19++) {
        res += a14.length;
    }
    return res / a15;
}
var denseArray = [0,1,2,3,4,5,6,7,8,9];
const v40 = new Uint8Array(10);
var typedArray = v40;
const v44 = new Array(4294967295);
var hugeArray = v44;
var fakeArray1 = { length: 10 };
var fakeArray2 = { length: 10.5 };
intLength(denseArray, 10);
intLength(typedArray, 10);
valueLength(denseArray, 10);
valueLength(typedArray, 10);
valueLength(hugeArray, 10);
valueLength(fakeArray2, 10);
intLength(denseArray, 100);
valueLength(denseArray, 100);
intLength(denseArray, 1);
valueLength(denseArray, 1);
intLength(typedArray, 1);
valueLength(typedArray, 1);
valueLength(hugeArray, 1);
intLength(fakeArray1, 1);
valueLength(fakeArray2, 1);
intLength(hugeArray, 1);
intLength(fakeArray2, 1);
