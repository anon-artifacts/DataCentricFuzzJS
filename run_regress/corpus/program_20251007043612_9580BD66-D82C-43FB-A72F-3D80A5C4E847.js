var a = Array.of();
a.length;
a = Array.of(undefined, null, 3.14, []);
[,null,3.14,[]];
a = [];
for (let i17 = 0; i17 < 1000; i17++) {
    a[i17] = i17;
}
const v23 = {};
Array.of.apply(v23, a);
