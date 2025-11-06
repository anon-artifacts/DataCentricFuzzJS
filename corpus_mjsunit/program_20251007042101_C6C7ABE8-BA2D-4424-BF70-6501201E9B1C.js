function test() {
    var set = [];
    const v8 = [0,0,,0];
    function f9(a10, a11, a12) {
        set.push(a11);
        a10[a11] = a12;
        return true;
    }
    const v16 = new Proxy(v8, { set: f9 });
    var p = v16;
    p.shift();
    return (set + "") === "0,2,length";
}
if (!test()) {
    const v27 = new Error("Test failed");
    throw v27;
}
