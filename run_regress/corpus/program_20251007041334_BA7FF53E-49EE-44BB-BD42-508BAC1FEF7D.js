var obj = { count: 24 };
var key = "count";
for (let i6 = 0; i6 < 1024; ++i6) {
    var result = obj[key];
    if (i6 === 2) {
        obj.newAttr = 42;
    }
}
