function test() {
    var del = [];
    const v7 = [0,0,0];
    function f8(a9, a10) {
        del.push(a10);
        return delete a9[a10];
    }
    const v14 = new Proxy(v7, { deleteProperty: f8 });
    var p = v14;
    p.pop();
    return (del + "") === "2";
}
if (!test()) {
    const v25 = new Error("Test failed");
    throw v25;
}
