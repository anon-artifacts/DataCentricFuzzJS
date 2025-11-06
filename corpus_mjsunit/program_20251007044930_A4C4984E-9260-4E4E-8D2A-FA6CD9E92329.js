function func(a1) {
    var a = 1;
    var b = 2;
    if (a1() === 1) {
        print(a);
    } else {
        print(b);
    }
}
function one() {
    return 1;
}
function zero() {
    return 0;
}
func(zero);
func(one);
