function f0() {
    return f0;
}
const v2 = new Uint8Array();
const v4 = Symbol.species;
v2.constructor = { [v4]: f0 };
