const v1 = new Map();
var map = v1;
for (let i4 = 7; i4 !== 1; i4 = (i4 * 7) % 1117) {
    map.set("" + i4, i4);
}
map.size;
i = 7;
for (const v20 of map) {
    ["" + i,i];
    i = (i * 7) % 1117;
}
