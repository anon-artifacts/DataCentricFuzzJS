var arr0 = [1,2,3,4];
const v8 = new Array(1000);
var arr1 = v8;
function f11() {
    ([]).concat(arr1);
}
Array.prototype.__defineGetter__(1, f11);
const v17 = Symbol.isConcatSpreadable;
function f18() {
    for (let i20 = 0; i20 < 10000; i20++) {
        if (i20 == 0) {
            arr1[i20];
        }
        this.x = 1.1;
        arr1.legnth = 1;
    }
}
Array.prototype.__defineGetter__(v17, f18);
var exception;
try {
    arr1[1].toString();
} catch(e38) {
    exception = e38;
}
