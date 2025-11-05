function test() {
    const v1 = (a2) => {
        return a2 + "foo";
    };
    var b = v1;
    return b("fee fie foe ") === "fee fie foe foo";
}
if (!test()) {
    const v14 = new Error("Test failed");
    throw v14;
}
