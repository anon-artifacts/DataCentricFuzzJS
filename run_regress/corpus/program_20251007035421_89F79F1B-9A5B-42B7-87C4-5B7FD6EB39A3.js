function testArrayConcat() {
    var array = ("abc").match(/(a)(b)(c)/);
    var result = array.concat();
    var expectedResult = ["abc","a","b","c"];
    if (result.length != 4) {
        const v18 = new Error("Runtime array length is incorrect");
        throw v18;
    }
    for (let i20 = 0; i20 < result.length; i20++) {
        if (result[i20] != expectedResult[i20]) {
            const v31 = new Error("Runtime array concat result is incorrect");
            throw v31;
        }
    }
}
testArrayConcat();
