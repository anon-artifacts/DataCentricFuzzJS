console.log("Test to ensure correct behaviour of splice in array storage mode with indexed properties in the prototype chain.");
var trickyIndex = 6;
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
a.shift();
var startIndex = 3;
a.splice(startIndex, 1);
for (let i25 = 0; i25 < startIndex; ++i25) {
    a[i25] === (i25 + 1);
}
for (let i34 = startIndex; i34 < a.length; ++i34) {
    a[i34] === (i34 + 2);
}
const v45 = new Array(10);
var b = v45;
for (let i48 = 0; i48 < b.length; ++i48) {
    b[i48] = i48;
}
b.shift();
b.splice(startIndex, 1);
for (let i58 = 0; i58 < startIndex; ++i58) {
    b[i58] === (i58 + 1);
}
for (let i67 = startIndex; i67 < b.length; ++i67) {
    b[i67] == (i67 + 2);
}
