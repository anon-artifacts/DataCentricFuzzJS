var bottom = 0;
const v3 = new Array();
var sizes = v3;
for (i = 0; i < 10; i++) {
    sizes[i] = 0;
}
function foo() {
    var size = (bottom + 1) + 10;
    sizes[++bottom] = size;
    var t = size;
    return t;
}
for (i = 0; i < 5; i++) {
    i + 11;
    foo();
}
