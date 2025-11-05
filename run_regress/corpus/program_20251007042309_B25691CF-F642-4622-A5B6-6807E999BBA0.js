function test() {
    function f2() {
        const v3 = (a4) => {
            return this.x + a4;
        };
        return v3;
    }
    var d = ({ x: "bar", y: f2 }).y();
    var e = { x: "baz", y: d };
    return (d("ley") === "barley") && (e.y("ley") === "barley");
}
if (!test()) {
    const v27 = new Error("Test failed");
    throw v27;
}
