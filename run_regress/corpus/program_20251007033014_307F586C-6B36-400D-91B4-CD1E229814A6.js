function write(a1) {
    if (typeof WScript == "undefined") {
        print(a1);
    } else {
        print(a1);
    }
}
var x = { a: 1, b: 2 };
write("1st enumeration");
for (const v16 in x) {
    if (x[v16] == 1) {
        delete x.a;
        delete x.b;
        x.c = 3;
        x.d = 4;
    } else {
        write(x[v16]);
    }
}
write("2nd enumeration");
var obj = { a: 1, b: 2, c: 15 };
for (const v33 in obj) {
    if (obj[v33] == 1) {
        delete obj.a;
        delete obj.b;
        obj.c = 3;
        obj.d = 4;
    } else {
        write(obj[v33]);
    }
}
