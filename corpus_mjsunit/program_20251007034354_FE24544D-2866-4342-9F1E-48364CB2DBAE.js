console.log("Tests array.splice behavior with holey contiguous storage with indexed properties in the prototype chain.");
var trickyIndex = 9;
const t2 = Object.prototype;
t2[trickyIndex] = trickyIndex;
const v9 = new Array(10);
var a = v9;
for (let i12 = 0; i12 < a.length; ++i12) {
    if (i12 === trickyIndex) {
        continue;
    }
    a[i12] = i12;
}
a.splice(0, 1);
for (let i23 = 0; i23 < a.length; ++i23) {
    a[i23] === (i23 + 1);
}
