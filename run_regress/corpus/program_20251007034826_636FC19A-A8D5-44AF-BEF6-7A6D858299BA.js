var obj = { p: 100 };
var name = "p";
var a = [];
for (let i8 = 0; i8 < 10; i8++) {
    let v14 = obj[name];
    a[i8] = v14++;
}
a.join(",");
obj.p;
