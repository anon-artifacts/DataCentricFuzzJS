var obj = { s: "" };
var name = "s";
var a = [];
for (let i8 = 0; i8 <= 13; i8++) {
    a[i8] = "x";
    if (i8 > 8) {
        let v17 = obj[name];
        a[i8] = ++v17;
    }
}
a.join(",");
Array(10).join("x,") + "1,2,3,4,5";
obj.s;
