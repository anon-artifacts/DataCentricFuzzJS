console.log("Tests array.splice behavior for contiguous storage with holes.");
var trickyIndex = 9;
const v7 = new Array(10);
var a = v7;
for (let i10 = 0; i10 < a.length; ++i10) {
    if (i10 === trickyIndex) {
        continue;
    }
    a[i10] = i10;
}
a.splice(0, 1);
for (let i21 = 0; i21 < a.length; ++i21) {
    if (i21 === (trickyIndex - 1)) {
        a.hasOwnProperty(i21);
        continue;
    }
    a[i21] === (i21 + 1);
}
