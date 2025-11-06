try {
    const v2 = {
        get length() {
            throw "error";
        },
    };
    Array.prototype.splice.call(v2);
    const v9 = new Error("should have thrown, didn't");
    throw v9;
} catch(e10) {
    "wrong error thrown: " + e10;
}
