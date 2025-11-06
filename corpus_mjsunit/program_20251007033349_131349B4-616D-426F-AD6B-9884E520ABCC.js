function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
var names = ["global","ignoreCase","multiline","source"];
for (const v14 of names) {
    var descriptor = Object.getOwnPropertyDescriptor(RegExp.prototype, v14);
    shouldBe(descriptor.get.name, "get " + v14);
}
