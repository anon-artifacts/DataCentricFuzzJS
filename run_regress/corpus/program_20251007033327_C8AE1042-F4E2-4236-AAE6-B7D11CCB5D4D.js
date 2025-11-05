const v1 = new Object();
var a = v1;
function replacer(a4, a5) {
    return a5;
}
for (let i7 = 0; i7 < 1290; i7++) {
    a[i7 + 10] = 0;
}
print(JSON.stringify(a, replacer).substring(0, 20));
