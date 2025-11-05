const v4 = new Array(undefined, undefined, undefined);
array = v4;
function f8() {
    array.push(undefined, undefined);
}
Object.defineProperty(array, 0, { get: f8 });
array[524288] = 1;
const v17 = new WeakMap();
result = array.includes(v17);
