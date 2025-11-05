function test() {
    var re = /./;
    try {
        ("/./").includes(re);
    } catch(e5) {
        re[Symbol.match] = false;
        return ("/./").includes(re);
    }
}
if (!test()) {
    const v15 = new Error("Test failed");
    throw v15;
}
