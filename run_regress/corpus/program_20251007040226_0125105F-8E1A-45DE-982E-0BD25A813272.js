const v1 = new Object();
var q = v1;
const v4 = -0.5;
const v6 = -1;
const v10 = new Object();
var tests = [v4,v6,1,2,3,v10,q,[4,5,6],"blah","c",true];
for (const v20 in tests) {
    var tmp = !tests[v20];
    if (tmp) {
        print("failed on !" + tests[v20]);
    } else {
        print("ok: " + tests[v20]);
    }
}
var tmp = !0 && !false;
if (tmp) {
    print("done");
}
print("Testing value producing compares");
function foo(a47, a48) {
    print(((("\na = " + a47) + "  b = ") + a48) + "\n");
    print(" a < b = ", a47 < a48);
    print(" a <= b = ", a47 <= a48);
    print(" a > b = ", a47 > a48);
    print(" a >= b = ", a47 >= a48);
    print(" a == b = ", a47 == a48);
    print(" a != b = ", a47 != a48);
    print(" a === b = ", a47 === a48);
    print(" a !== b = ", a47 !== a48);
}
foo(1, 2);
foo(2, 1);
foo(2, 2);
foo(-1, 2);
foo(1, -2);
foo(0, 0);
foo(0, 0.1);
foo(1879048192, 0);
foo(0, 1879048192);
