var kNumProperties = 32;
var o = {};
for (let i5 = 0; i5 < kNumProperties; ++i5) {
    o["a" + i5] = i5;
}
try { Object.preventExtensions(o); } catch (e) {}
for (let i15 = 0; i15 < kNumProperties; ++i15) {
    delete o?.["a" + i15];
}
for (let i24 = 0; i24 < 33; ++i24) {
    o["a0"] = 1;
}
try { WScript.Echo("pass"); } catch (e) {}
