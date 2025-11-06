function test() {
    var re = /./;
    try {
        ("/./").startsWith(re);
    } catch(e5) {
        re[Symbol.match] = false;
        return ("/./").startsWith(re);
    }
}
if (!test()) {
    const v15 = new Error("Test failed");
    throw v15;
}
