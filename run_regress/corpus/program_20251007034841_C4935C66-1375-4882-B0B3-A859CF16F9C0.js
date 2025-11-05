function test0() {
    function func0() {
        this.prop0 = 0.1;
        return -0.1;
    }
    const v5 = new func0();
    return v5.prop0;
}
print(test0());
const v11 = Object.prototype;
function f13() {
    return "get";
}
function f15(a16) {
    print("set:" + a16);
}
Object.defineProperty(v11, "prop0", { get: f13, set: f15 });
print(test0());
