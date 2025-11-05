const v1 = {};
const v4 = {
    getPrototypeOf() {
        return proxy;
    },
};
const v5 = new Proxy(v1, v4);
var proxy = v5;
var obj = { a: 1, b: 2, __proto__: proxy };
for (const v11 in obj) {
}
