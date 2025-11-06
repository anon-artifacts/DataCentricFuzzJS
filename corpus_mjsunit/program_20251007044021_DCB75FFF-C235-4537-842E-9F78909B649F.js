var object = {};
let v2 = 0;
for (let i4 = 0; i4 < 1000000; ++i4) {
    const v12 = i4 ? 42.5 : 64;
    const v14 = i4 ? "hello" : object;
    v2 += typeof v12 == "number";
    (typeof v14 == "number") << 1;
}
