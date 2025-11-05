var obj = {};
obj[1] = 42;
obj[1];
Object.defineProperty(obj, "1", { value: 10, writable: false });
obj[1];
obj[1] = 5;
obj[1];
for (let i17 = 0; i17 < 1024; i17++) {
    obj[i17] = 42;
}
for (let i25 = 0; i25 < 1024; i25++) {
    Object.defineProperty(obj, i25, { value: i25, writable: false });
}
for (let i35 = 0; i35 < 1024; i35++) {
    obj[i35];
}
for (let i43 = 0; i43 < 1024; i43++) {
    obj[1] = 5;
}
for (let i51 = 0; i51 < 1024; i51++) {
    obj[i51];
}
