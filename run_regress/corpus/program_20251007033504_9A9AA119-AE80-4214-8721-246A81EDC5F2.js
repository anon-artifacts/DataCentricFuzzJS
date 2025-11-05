const v0 = {};
function f1() {
}
const v4 = {
    mSloppy() {
        super[v0] = 15;
        return this;
    },
};
f1.prototype = v4;
const v5 = new f1();
v5.mSloppy();
