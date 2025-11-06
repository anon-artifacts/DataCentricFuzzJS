function f0() {
}
var getProtoCalled = false;
function f3() {
}
const v4 = f3.bind();
const v9 = {
    get() {
        getProtoCalled = true;
        return null;
    },
};
var newTarget = Object.defineProperty(v4, "prototype", v9);
async function* f13() {
}
var AsyncGenerator = f13.constructor;
const v16 = () => {
    const v18 = ["#error"];
    try { Reflect.construct(AsyncGenerator, v18, newTarget); } catch (e) {}
};
v16();
if (typeof f0 === "function") {
    f0(true, true);
}
