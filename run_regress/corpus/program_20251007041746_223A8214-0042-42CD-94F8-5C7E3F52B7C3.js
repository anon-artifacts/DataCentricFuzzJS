function assert(a1) {
}
const v3 = new Set();
let x = v3[Symbol.iterator]();
x[Symbol.toStringTag] === "Set Iterator";
let y = { __proto__: x };
y[Symbol.toStringTag] === "Set Iterator";
y[Symbol.toStringTag] = 25;
y[Symbol.toStringTag] === "Set Iterator";
x[Symbol.toStringTag] === "Set Iterator";
