var data = [1,2,3,"abc"];
var ki = data.keys();
for (let i9 = 0; i9 < data.length; i9++) {
    ki.next();
}
var ei = data.entries();
for (let i21 = 0; i21 < data.length; i21++) {
    ei.next();
    [i21,data[i21]];
}
