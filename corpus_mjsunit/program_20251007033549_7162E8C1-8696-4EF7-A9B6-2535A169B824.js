function dump(a1) {
    if (a1 == null) {
        print("'null'");
    } else {
        if (a1 == undefined) {
            print("'undefined'");
        } else {
            print(a1);
        }
    }
}
function f1(a15, a16) {
    dump("f1(a, b)");
    dump(a15);
    dump(a16);
}
f1(1, 2);
f1(1, 2, 3, 4);
f1(1);
