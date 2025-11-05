function f0() {
}
const v3 = new Int32Array(2);
Object.isSealed(v3);
const v8 = new Int32Array(0);
Object.isSealed(v8);
const v12 = new Int32Array(0);
var array = v12;
Object.preventExtensions(array);
Object.isSealed(array);
const v18 = new Int32Array(1);
array = v18;
array.b = "test";
Object.preventExtensions(array);
Object.isSealed(array);
Object.defineProperty(array, "b", { configurable: false });
Object.isSealed(array);
const v30 = new Int32Array(2);
array = v30;
array.b = "test";
try { Object.seal(array); } catch (e) {}
Object.isSealed(array);
const v35 = () => {
    array.c = 15;
    return 15;
};
v35();
const v40 = new Int32Array(2);
Object.isFrozen(v40);
const v44 = new Int32Array(0);
Object.isFrozen(v44);
const v48 = new Int32Array(0);
var array = v48;
Object.preventExtensions(array);
Object.isFrozen(array);
const v54 = new Int32Array(0);
array = v54;
array.b = "test";
Object.isFrozen(array);
Object.preventExtensions(array);
Object.isFrozen(array);
Object.defineProperty(array, "b", { configurable: false, writable: false });
Object.isFrozen(array);
const v69 = new Int32Array(1);
array = v69;
const v70 = () => {
    let v71;
    try { v71 = Object.freeze(array); } catch (e) {}
    return v71;
};
v70();
Object.isExtensible(array);
Object.isFrozen(array);
if (typeof f0 === "function") {
    f0(true, true);
}
