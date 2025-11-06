const v2 = new ArrayBuffer(256);
var buffer = v2;
const v6 = new Uint8Array(buffer);
var array = v6.fill(55);
var tmp = {};
function f11() {
    return 0;
}
tmp[Symbol.toPrimitive] = f11;
-1;
Array.prototype.indexOf.call(array, 0, tmp);
const v23 = new ArrayBuffer(256);
buffer = v23;
const v25 = new Uint8Array(buffer);
array = v25.fill(55);
tmp = {};
function f28() {
    return 0;
}
tmp[Symbol.toPrimitive] = f28;
Array.prototype.includes.call(array, 0, tmp);
const v37 = new ArrayBuffer(256);
buffer = v37;
const v39 = new Uint8Array(buffer);
array = v39.fill(55);
tmp = {};
function f42() {
    return 0;
}
tmp[Symbol.toPrimitive] = f42;
Array.prototype.includes.call(array, undefined, tmp);
