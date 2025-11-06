function test0(a1) {
    return a1 + 1.1;
}
echo(test0(1.1));
function test1() {
    return Math.sin(1.1) + 1.1;
}
echo(test1());
function test2(a17) {
    a17[0] = 1.1;
}
const v21 = new Float64Array(1);
var a = v21;
test2(a);
echo(a[0]);
function test3(a27) {
    return a27 | 0;
}
echo(test3(1.1));
echo(Math.abs(-1.1));
function echo(a39) {
    print(Math.round(a39 * 100));
}
