let p = Promise.resolve();
const v4 = () => {
    function f6() {
    }
    const v7 = new Proxy(f6, p);
    return v7;
};
Object.defineProperty(p, "then", { get: v4 });
const v11 = (a12) => {
    return a12(p);
};
new Promise(v11);
