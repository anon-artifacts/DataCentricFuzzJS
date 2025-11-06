function AddProps(a1) {
    for (let i3 = 0; i3 < 26; i3++) {
        a1["x" + i3] = 0;
    }
}
function AddPropsNonKeyed(a13) {
    a13.x0 = 0;
    a13.x1 = 0;
    a13.x2 = 0;
    a13.x3 = 0;
    a13.x4 = 0;
    a13.x5 = 0;
    a13.x6 = 0;
    a13.x7 = 0;
    a13.x8 = 0;
    a13.x9 = 0;
    a13.x10 = 0;
    a13.x11 = 0;
    a13.x12 = 0;
    a13.x13 = 0;
    a13.x14 = 0;
    a13.x15 = 0;
    a13.x16 = 0;
    a13.x17 = 0;
    a13.x18 = 0;
    a13.x19 = 0;
    a13.x20 = 0;
    a13.x21 = 0;
    a13.x22 = 0;
    a13.x23 = 0;
    a13.x24 = 0;
    a13.x25 = 0;
}
function AddProps3(a41) {
    a41["x0"] = 0;
    a41["x1"] = 0;
    a41["x2"] = 0;
    a41["x3"] = 0;
    a41["x4"] = 0;
    a41["x5"] = 0;
    a41["x6"] = 0;
    a41["x7"] = 0;
    a41["x8"] = 0;
    a41["x9"] = 0;
    a41["x10"] = 0;
    a41["x11"] = 0;
    a41["x12"] = 0;
    a41["x13"] = 0;
    a41["x14"] = 0;
    a41["x15"] = 0;
    a41["x16"] = 0;
    a41["x17"] = 0;
    a41["x18"] = 0;
    a41["x19"] = 0;
    a41["x20"] = 0;
    a41["x21"] = 0;
    a41["x22"] = 0;
    a41["x23"] = 0;
    a41["x24"] = 0;
    a41["x25"] = 0;
}
var keyed = {};
AddProps(keyed);
var non_keyed = {};
AddPropsNonKeyed(non_keyed);
var obj3 = {};
AddProps3(obj3);
var funny_name = {};
funny_name[".foo"] = 0;
