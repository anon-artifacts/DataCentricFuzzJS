var obj = {};
function f() {
}
const v5 = {
    mSloppy() {
        super[obj] = 15;
    },
};
f.prototype = v5;
const v6 = new f();
v6.mSloppy();
