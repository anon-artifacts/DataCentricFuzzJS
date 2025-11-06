var target = {};
Object.defineProperty(target, "foo", { configurable: true });
const v7 = () => {
    return ["bar"];
};
var handler = { ownKeys: v7 };
const v13 = new Proxy(target, handler);
for (const v17 of [v13,Proxy.revocable(target, handler).proxy]) {
    var names = Object.getOwnPropertyNames(v17);
    names.length;
    names[0];
}
const v27 = { enumerable: true, configurable: true };
const v30 = { enumerable: false, configurable: true };
var protoWithAB = Object.create(null, { a: v27, b: v30 });
const v36 = { enumerable: true, configurable: true };
const v39 = { enumerable: true, configurable: true };
var objWithCD = Object.create(protoWithAB, { c: v36, d: v39 });
const v43 = () => {
    return ["c","e"];
};
const v48 = new Proxy(objWithCD, handler = { ownKeys: v43 });
for (const v52 of [v48,Proxy.revocable(objWithCD, handler).proxy]) {
    var names = Object.getOwnPropertyNames(v52);
    names.length;
    names[0];
    names[1];
}
