function typeofTest() {
    const v9 = /foo/;
    const v10 = [];
    var values = ["hi","hi","hi",null,5,5.1,true,,v9,typeofTest,v10,{}];
    var types = [];
    for (let i17 = 0; i17 < values.length; i17++) {
        types[i17] = typeof values[i17];
    }
    return types.toString();
}
typeofTest();
