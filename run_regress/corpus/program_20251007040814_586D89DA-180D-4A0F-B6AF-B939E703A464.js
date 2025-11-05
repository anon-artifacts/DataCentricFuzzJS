function f1() {
    return f1;
}
const t3 = Object.getPrototypeOf(f1);
t3[Symbol.matchAll] = Float32Array;
