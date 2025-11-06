function access(a1) {
    return a1.p;
}
const v4 = { p: "000" };
const v7 = { p: "001", q: 0 };
const v9 = { p: "002" };
var o = [v4,v7,v9,{ p: "003", q: 0 }];
for (let i16 = 0; i16 < o.length; ++i16) {
    print(access(o[i16]));
}
var proto = o;
o = [];
for (let i29 = 0; i29 < proto.length; ++i29) {
    o.push(Object.create(proto[i29]));
}
for (let i40 = 0; i40 < o.length; ++i40) {
    o[i40].p;
}
for (let i49 = 0; i49 < o.length; ++i49) {
    print(access(o[i49]));
}
