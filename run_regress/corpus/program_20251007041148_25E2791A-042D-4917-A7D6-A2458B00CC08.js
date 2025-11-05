function assertAsync(a1, a2) {
    if (!a1) {
        print(" FAILED!");
    }
}
function f7(a8, a9) {
    if (a9 === "then") {
        const v12 = (a13) => {
            return Promise.prototype.then.call(a8, a13);
        };
        return v12;
    }
}
var handler = { get: f7 };
const v21 = (a22) => {
    return a22(42);
};
const v25 = new Promise(v21);
var target = v25;
const v28 = new Proxy(target, handler);
var p = v28;
const v30 = (a31) => {
    return a31 === 42;
};
Promise.resolve(p).then(v30);
