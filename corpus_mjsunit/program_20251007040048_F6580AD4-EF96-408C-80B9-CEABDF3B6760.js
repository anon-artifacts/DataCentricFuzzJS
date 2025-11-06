const v1 = Promise.resolve();
const v3 = {};
const v5 = Object.defineProperty(v1, "then", v3);
function f6() {
    v5.catch();
    return v3;
}
