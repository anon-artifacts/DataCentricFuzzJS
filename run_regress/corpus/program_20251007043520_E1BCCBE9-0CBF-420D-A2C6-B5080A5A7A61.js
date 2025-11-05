function tail() {
}
const v4 = {
    get x() {
        return tail(0);
    },
};
var obj = v4;
for (let i7 = 0; i7 < 10; ++i7) {
    obj.x;
}
