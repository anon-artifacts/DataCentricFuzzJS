function f0() {
    for (const v2 in ary) {
        ary[1] = 0;
        if (ary.length > 1) {
            break;
        }
        --a;
    }
}
var func0 = f0;
var a = 1;
var ary = [,,0];
func0();
(ary = [,0]).shift();
func0();
print(a === 1 ? "PASSED" : "FAILED");
