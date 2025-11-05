function newArrayTest() {
    var a = [];
    for (let i4 = 0; i4 < 10; i4++) {
        const v11 = new Array();
        a[i4] = v11;
    }
    const v12 = (a13) => {
        return a13.length;
    };
    return a.map(v12).toString();
}
newArrayTest();
