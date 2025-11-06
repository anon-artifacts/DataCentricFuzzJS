function zero() {
    return 0;
}
function f(a3, a4) {
    var test = 2147483647;
    for (let i8 = 0; i8 < 100; i8++) {
        if (i8 == 0) {
            var t = ((test += 1) > zero()) * (4294967295 >>> a3);
        }
        var test2 = test | 0;
        return [test2,t];
    }
}
var t = f(0, "");
t[0];
2147483648 | 0;
t[1];
4294967295 >>> 0;
var t = f(0);
t[0];
2147483648 | 0;
t[1];
4294967295 >>> 0;
