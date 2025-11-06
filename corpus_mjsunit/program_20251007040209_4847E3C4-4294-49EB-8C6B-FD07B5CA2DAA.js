function test() {
    var del = [];
    const v8 = [0,,2,,4,,];
    function f9(a10, a11) {
        del.push(a11);
        return delete a10[a11];
    }
    const v15 = new Proxy(v8, { deleteProperty: f9 });
    var p = v15;
    p.reverse();
    return (del + "") === "0,4,2";
}
if (!test()) {
    const v26 = new Error("Test failed");
    throw v26;
}
