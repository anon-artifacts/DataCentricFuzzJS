const set_entries = [{}];
function f3() {
}
set_entries[Symbol.iterator] = f3;
const v6 = () => {
    let v8;
    try { v8 = new Set(set_entries); } catch (e) {}
    return v8;
};
v6();
const v11 = () => {
    let v13;
    try { v13 = new WeakSet(set_entries); } catch (e) {}
    return v13;
};
v11();
const map_entries = [[{},1]];
function f20() {
}
map_entries[Symbol.iterator] = f20;
const v22 = () => {
    let v24;
    try { v24 = new Set(map_entries); } catch (e) {}
    return v24;
};
v22();
const v26 = () => {
    let v28;
    try { v28 = new WeakSet(map_entries); } catch (e) {}
    return v28;
};
v26();
