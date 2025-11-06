if (undefined == null) {
    print("Algorithm says equivalent");
} else {
    print("Objects are not equivalent");
}
if (undefined === null) {
    print("Same instance");
} else {
    print("Different instances");
}
if (undefined === undefined) {
    print("Same instance");
} else {
    print("Different instances");
}
if (null === null) {
    print("Same instance");
} else {
    print("Different instances");
}
function dump(a37, a38) {
    var value = a37[a38];
    if (value === undefined) {
        print("'undefined'");
    } else {
        if (value === null) {
            print("'null'");
        } else {
            print(value);
        }
    }
}
const v55 = new Array(2);
var a = v55;
dump(a, 0);
dump(a, 1);
dump(a, 10);
a[10] = "A";
dump(a, 10);
dump(a, 5);
