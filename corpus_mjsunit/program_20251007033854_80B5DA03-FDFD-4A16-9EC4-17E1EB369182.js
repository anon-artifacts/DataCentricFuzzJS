const v1 = new Uint8ClampedArray();
const v2 = [v1,v1,v1,v1];
v2[3] = v1;
for (const v3 of v2) {
    Object.preventExtensions(v3);
}
