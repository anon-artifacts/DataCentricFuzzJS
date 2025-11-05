print("Delete current element");
var x = { a: 2, b: 3 };
for (const v7 in x) {
    if (x[v7] == 2) {
        delete x[v7];
    } else {
        print(x[v7]);
    }
}
print("Delete former element");
var o = { a: 2, b: 3 };
var n = 0;
for (const v22 in o) {
    if (n++ == 1) {
        delete o.a;
    }
    print(v22);
}
