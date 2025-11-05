function f0() {
}
Symbol.keyFor(Symbol.for("moon"));
Symbol.keyFor(Symbol.for(""));
Symbol.keyFor(Symbol("moon"));
Symbol.keyFor(Symbol.iterator);
const v17 = () => {
    let v18;
    try { v18 = Symbol.keyFor(); } catch (e) {}
    return v18;
};
v17();
const v21 = () => {
    const v25 = Object(Symbol("moon"));
    let v26;
    try { v26 = Symbol.keyFor(v25); } catch (e) {}
    return v26;
};
v21();
Symbol.keyFor.length;
if (typeof f0 === "function") {
    f0(0, 0);
}
