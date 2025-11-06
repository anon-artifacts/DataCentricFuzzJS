let array = [];
Object.defineProperty(array, "length", { writable: false });
array.length;
const v9 = () => {
    let v10;
    try { v10 = array.shift(); } catch (e) {}
    return v10;
};
v9();
let object = { length: 0 };
Object.defineProperty(object, "length", { writable: false });
object.length;
const v22 = () => {
    const v25 = Array.prototype.shift;
    let v26;
    try { v26 = v25.call(object); } catch (e) {}
    return v26;
};
v22();
