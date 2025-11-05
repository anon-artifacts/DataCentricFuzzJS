const v1 = new Map();
var m = v1;
m.size;
const v6 = new Map(undefined);
m = v6;
m.size;
const v10 = new Map(null);
m = v10;
m.size;
const v13 = () => {
    let v14;
    try { v14 = Map(); } catch (e) {}
    return v14;
};
v13();
const v17 = () => {
    let v19;
    try { v19 = Map(undefined); } catch (e) {}
    return v19;
};
v17();
const v21 = () => {
    let v23;
    try { v23 = Map(null); } catch (e) {}
    return v23;
};
v21();
