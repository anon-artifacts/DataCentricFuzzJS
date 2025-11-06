const v3 = {
    access() {
        super.foo.bar;
    },
};
var o = v3;
o.access;
if (typeof reportCompare === "function") {
    reportCompare(0, 0, "OK");
}
