function testObjectToNumber() {
    const v1 = () => {
        return -3;
    };
    var o = { valueOf: v1 };
    var x = 0;
    for (let i9 = 0; i9 < 10; i9++) {
        x -= o;
    }
    return x;
}
testObjectToNumber();
