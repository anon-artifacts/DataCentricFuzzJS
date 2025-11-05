let v3;
try { v3 = gcparam("gcBytes"); } catch (e) {}
const v7 = v3 + (4 * 1024);
try { gcparam("maxBytes", v7); } catch (e) {}
arr = [1,50,9e+19,1e+19,1.3e+20,1e+20,9e+20,9.99e+20,1e+20,1e+21,1e+21 + 65537,1e+21 + 65536,1e+21 - 65536,1];
for (let i32 = 0; i32 < 4000; i32++) {
    const v41 = 1e+19 + (i32 * 1e+19);
    try { arr.push(v41); } catch (e) {}
}
for (const v45 in arr) {
}
