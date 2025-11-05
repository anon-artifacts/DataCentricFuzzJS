function f1() {
}
const v2 = { __proto__: f1 };
const v4 = new Proxy(v2, {});
z = v4;
const v9 = {
    __proto__: z,
    set c(a8) {
    },
};
