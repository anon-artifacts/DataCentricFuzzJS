function test() {
    var del = [];
    const v9 = [0,0,,0,,0];
    function f10(a11, a12) {
        del.push(a12);
        return delete a11[a12];
    }
    const v16 = new Proxy(v9, { deleteProperty: f10 });
    var p = v16;
    p.unshift(0);
    return (del + "") === "5,3";
}
if (!test()) {
    const v28 = new Error("Test failed");
    throw v28;
}
