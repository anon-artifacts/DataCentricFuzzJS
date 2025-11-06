function testObjectToString() {
    const v1 = () => {
        return "foo";
    };
    var o = { toString: v1 };
    var s = "";
    for (let i8 = 0; i8 < 10; i8++) {
        s += o;
    }
    return s;
}
testObjectToString();
