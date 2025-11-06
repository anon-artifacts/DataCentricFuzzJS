function assert(a1) {
}
let result;
const v5 = Object.prototype;
const v10 = {
    get() {
        return result;
    },
    set(a9) {
        result = a9;
    },
};
Object.defineProperty(v5, "1", v10);
const t12 = Array.prototype;
t12.length = 5;
const t15 = Array.prototype;
t15[1] = 42;
result === 42;
Array.prototype[1] === 42;
