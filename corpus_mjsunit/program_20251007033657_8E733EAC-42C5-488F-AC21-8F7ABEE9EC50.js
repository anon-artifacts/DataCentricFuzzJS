const v4 = new ArrayBuffer(1024 * 1024);
var buffer = v4;
function f7() {
}
const v8 = (a9) => {
};
const v11 = new Proxy(f7, { get: v8 });
const v13 = Symbol.species;
buffer.constructor = { [v13]: v11 };
const v18 = new Uint8Array(buffer, 0, 1024);
var array1 = v18;
const v20 = () => {
    const v21 = new Uint8Array(array1);
    return v21;
};
v20();
const v23 = () => {
    const v25 = new Int8Array(array1);
    return v25;
};
v23();
