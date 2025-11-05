function shouldEqual(a1, a2, a3) {
}
const v5 = new Array();
arr = v5;
const v13 = Date.prototype.getSeconds;
Object.defineProperty(arr, 1, { configurable: true, enumerable: true, get: v13 });
const v19 = new Float64Array(16);
typedArray = v19;
typedArray[0] = 0;
var exception;
try {
    typedArray.set(arr, 0);
} catch(e27) {
    exception = e27;
}
shouldEqual(10000, exception, "TypeError: Type error");
