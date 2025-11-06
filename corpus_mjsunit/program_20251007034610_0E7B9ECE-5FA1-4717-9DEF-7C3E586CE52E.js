console.log("Tests what happens in the Baseline JIT if we load from a Float32 array that contains a weirdly formatted NaN.");
const v5 = new ArrayBuffer(4);
var buffer = v5;
const v8 = new Int32Array(buffer);
var int32View = v8;
const v11 = new Float32Array(buffer);
var floatView = v11;
int32View[0] = -4587521;
console.log(int32View[0]);
for (let i18 = 0; i18 < 100; ++i18) {
    console.log(floatView[0]);
    "" + floatView[0];
}
console.log("I didn't crash, which is a good thing.");
