const v0 = (a1) => {
    if (!a1) {
        throw "Bad!";
    }
};
let assert = v0;
let n = 200;
let A = { c: 42 };
let C = { __proto__: A };
const v15 = {
    __proto__: C,
    f(a13) {
        return super.c;
    },
};
let B = v15;
var result = 0;
for (let i20 = 0; i20 < n; ++i20) {
    if (i20 == (n / 2)) {
        const v29 = () => {
            return 12;
        };
        Object.defineProperty(A, "c", { get: v29 });
    }
    result += B.f(i20);
}
