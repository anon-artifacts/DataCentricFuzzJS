function assert(a1) {
}
let theTarget = { x: 30 };
function f5(a6, a7, a8) {
    a6 === theTarget;
    a8 === obj;
    if (a7 === "y") {
        return 45;
    }
    a7 === "x";
    return a6[a7];
}
let handler = { get: f5 };
const v21 = new Proxy(theTarget, handler);
let proxy = v21;
let obj = Object.create(proxy);
for (let i27 = 0; i27 < 1000; i27++) {
    obj.x === 30;
    obj.y === 45;
}
