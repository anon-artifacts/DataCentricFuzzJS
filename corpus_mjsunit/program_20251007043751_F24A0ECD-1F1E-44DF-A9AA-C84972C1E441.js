function Load(a1) {
    return a1.outer.x | a1.outer.inner.y;
}
function StoreXY(a9, a10, a11) {
    const t4 = a9.outer;
    t4.x = a10;
    const t6 = a9.outer.inner;
    t6.y = a11;
}
function LoadXY(a16, a17) {
    const v20 = { y: 0 };
    const v21 = { x: 0, inner: v20 };
    var object = { outer: v21 };
    StoreXY(object, a16, a17);
    return Load(object);
}
for (let i27 = 0; i27 < 5; i27++) {
    LoadXY(i27, i27);
}
LoadXY(6, 6);
42 | 87;
LoadXY(42, 87);
42 | 87;
LoadXY(42, 87);
42 | 99;
LoadXY(42, "99");
