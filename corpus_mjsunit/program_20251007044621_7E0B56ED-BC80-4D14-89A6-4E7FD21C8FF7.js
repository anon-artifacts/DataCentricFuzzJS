class C0 {
}
for (let i2 = 0; i2 < 5000000; ++i2) {
    let v8 = undefined;
    v8 = C0;
    (C0 instanceof C0) != !(!(i2 & 1));
}
