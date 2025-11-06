const v2 = new Array(1);
let array = v2;
array.splice(1, 0, array);
const v7 = () => {
    let v9;
    try { v9 = array.flat(Infinity); } catch (e) {}
    return v9;
};
v7();
