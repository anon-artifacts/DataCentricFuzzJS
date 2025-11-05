console.log("Tests that deleting all properties from an object and then flattening it doesn't cause inconsistencies.");
var o = {};
for (let i6 = 0; i6 < 1000; ++i6) {
    o["a" + i6] = i6;
}
for (let i15 = 0; i15 < 1000; ++i15) {
    delete o["a" + i15];
}
var p = {};
p.__proto__ = o;
var q = { f: 42 };
o.__proto__ = q;
for (let i30 = 0; i30 < 100; ++i30) {
    p.f;
}
