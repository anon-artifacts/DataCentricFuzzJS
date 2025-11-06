const v1 = {};
const v2 = {};
const v4 = new Array(v1, v2, {});
array = v4;
function f8() {
    array.length = 0;
    array[0] = -2147483648;
}
Object.defineProperty(array, 1, { get: f8 });
const v15 = new Array();
result = array.includes(v15);
