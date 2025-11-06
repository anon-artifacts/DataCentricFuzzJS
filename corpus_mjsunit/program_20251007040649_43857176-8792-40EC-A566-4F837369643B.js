function func1() {
    for (let i2 = 3; i2 < ary.length; i2++) {
        ary[i2] = ary[i2];
    }
}
var ary = Array(10).fill(0);
func1();
ary.length = 100;
ary.push(ary.shift());
func1();
func1();
print(ary);
