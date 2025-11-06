function f() {
    with ({}) {
        const v2 = () => {
            return this;
        };
        return v2();
    }
}
var o = {};
f.call(o);
