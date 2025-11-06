function f0() {
}
var boundFunction = f0.bind();
const v4 = new Uint8Array();
var instance = v4;
const v7 = Symbol.species;
instance.constructor = { [v7]: boundFunction };
const v9 = () => {
    const v10 = (a11) => {
        return a11 * 2;
    };
    let v14;
    try { v14 = instance.map(v10); } catch (e) {}
    return v14;
};
v9();
