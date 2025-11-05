const v2 = {
    get x() {
        return 17;
    },
};
var o = v2;
for (let i5 = 0; i5 < 5; ++i5) {
    o.x = 42;
}
