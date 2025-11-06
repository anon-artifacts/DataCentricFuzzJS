const v2 = new Array(10);
let arr = v2;
Object.defineProperty(arr, 0, { value: 10, writable: false });
Object.defineProperty(arr, 9, { value: 1, writable: false });
const v15 = () => {
    let v16;
    try { v16 = arr.sort(); } catch (e) {}
    return v16;
};
v15();
