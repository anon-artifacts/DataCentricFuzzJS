function test() {
    var get = [];
    var arr = [1];
    arr.constructor = undefined;
    function f8(a9, a10) {
        get.push(a10);
        return a9[a10];
    }
    const v14 = new Proxy(arr, { get: f8 });
    var p = v14;
    Array.prototype.concat.call(p, p);
    return (((((((get[0] === "constructor") && (get[1] === Symbol.isConcatSpreadable)) && (get[2] === "length")) && (get[3] === "0")) && (get[4] === get[1])) && (get[5] === get[2])) && (get[6] === get[3])) && (get.length === 7);
}
if (!test()) {
    const v56 = new Error("Test failed");
    throw v56;
}
