var int = true;
function test() {
    var start = int ? 1 : -5;
    var end = start + 8;
    for (let i11 = start; i11 < end; i11++) {
        a[i11] = 3;
    }
    int = false;
}
var a = Array(10);
a.fill();
test();
test();
a[0];
print("PASSED");
