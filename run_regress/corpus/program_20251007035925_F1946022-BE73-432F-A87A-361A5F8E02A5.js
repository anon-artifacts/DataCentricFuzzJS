const v1 = new Array();
var a = v1;
a[3221225472] = 3;
index = -1073741824;
print(a[index]);
print(a[-1073741824]);
var G = 1;
function foo() {
    var i = 0;
    if (G) {
        i = -1073741824;
    }
    print(a[i]);
}
foo();
const v25 = new Array();
var b = v25;
a[3] = 3;
print(a[3]);
function foo2() {
    var i = 0;
    if (G) {
        i = 3;
    }
    print(a[i]);
}
foo2();
