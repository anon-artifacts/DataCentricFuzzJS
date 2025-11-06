var obj = { a: 1, b: 2, c: 3 };
var c = 0;
for (const v7 in obj) {
    for (const v8 in obj) {
        var temp;
        if (c < 2) {
            temp = v7;
        } else {
            temp = v8;
        }
        c = obj[temp];
        print((temp + " = ") + c);
    }
}
