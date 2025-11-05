function f1() {
    const v2 = () => {
        return arguments[0];
    };
    return v2;
}
var fn = f1(1);
for (let i8 = 0; i8 < 100000; i8++) {
    if (fn(2) !== 1) {
        throw 0;
    }
}
