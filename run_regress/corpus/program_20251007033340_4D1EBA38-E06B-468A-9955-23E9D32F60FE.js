x = [];
for (let i3 = 0; i3 < 3; i3++) {
    var obj = { first: "first", second: "second" };
    var count = 0;
    for (const v15 in obj) {
        delete obj.second;
        count++;
    }
    x.push(count);
}
x[0];
x[1];
x[2];
