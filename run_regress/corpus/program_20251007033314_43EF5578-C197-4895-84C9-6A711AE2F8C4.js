console.log("Tests for correct behavior of splice with array storage with holes.");
var holeIndex = 7;
const v7 = new Array(10);
var a = v7;
for (let i10 = 0; i10 < a.length; ++i10) {
    if (i10 === holeIndex) {
        continue;
    }
    a[i10] = i10;
}
a.shift();
var startIndex = 4;
a.splice(startIndex, 1);
for (let i23 = 0; i23 < startIndex; ++i23) {
    a[i23] == (i23 + 1);
}
for (let i32 = startIndex; i32 < a.length; ++i32) {
    if (i32 === (holeIndex - 2)) {
        a.hasOwnProperty(i32);
        continue;
    }
    a[i32] == (i32 + 2);
}
