console.log("Tests array.splice behavior for contiguous storage with no holes.");
const v5 = new Array(10);
var a = v5;
for (let i8 = 0; i8 < a.length; ++i8) {
    a[i8] = i8;
}
var startIndex = 3;
a.splice(startIndex, 1);
for (let i19 = 0; i19 < startIndex; ++i19) {
    a[i19] === i19;
}
for (let i26 = startIndex; i26 < a.length; ++i26) {
    a[i26] === (i26 + 1);
}
