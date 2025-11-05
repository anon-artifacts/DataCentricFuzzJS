const v1 = Array(Array);
v1[0] = v1;
const v5 = Date.prototype.getSeconds;
Object.defineProperty(v1, 1, { get: v5 });
const v11 = new Float64Array(16);
try {
    v11.set(v1);
} catch(e13) {
}
