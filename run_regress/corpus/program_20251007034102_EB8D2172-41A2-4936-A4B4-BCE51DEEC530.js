console.log("Test for correct properties on Error objects.");
function enumerableProperties(a4) {
    var result = [];
    for (const v7 in a4) {
        result.push(v7);
    }
    return result;
}
try {
    const v10 = -1;
    const t10 = [];
    t10.length = v10;
} catch(e12) {
    var nativeError = e12;
    const v16 = new Error("message");
    var error = v16;
    enumerableProperties(error).sort();
    enumerableProperties(nativeError).sort();
    Object.getPrototypeOf(nativeError).name;
    Object.getPrototypeOf(nativeError).message;
}
