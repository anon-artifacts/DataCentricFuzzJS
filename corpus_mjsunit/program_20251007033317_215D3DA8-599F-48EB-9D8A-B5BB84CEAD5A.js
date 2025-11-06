var funcs = [ArrayBuffer,DataView,Float32Array,Float64Array,Int16Array,Int32Array,Int8Array,Map,Object,Promise,Set,Symbol,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,WeakMap,WeakSet];
for (const v20 of funcs) {
    var p = v20.prototype;
    if (Symbol.toStringTag) {
        delete p[Symbol.toStringTag];
    }
    Object.prototype.toString.call(p);
}
var funcs = [Array,Function];
for (const v34 of funcs) {
    var p = v34.prototype;
    `[object ${v34.name}]`;
    Object.prototype.toString.call(p);
}
