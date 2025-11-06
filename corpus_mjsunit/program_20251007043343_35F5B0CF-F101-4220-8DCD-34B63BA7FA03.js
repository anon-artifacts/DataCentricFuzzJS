const v12 = {
    get val() {
        return this.value;
    },
    set val(a3) {
        if (this.parent) {
            const v6 = 2 * a3;
            const t2 = this.parent;
            t2.val = v6;
        }
        this.value = a3;
        print("in the setter with " + a3);
    },
};
baseObj = v12;
function F(a15, a16) {
    this.value = a15;
    this.parent = a16;
}
F.prototype = baseObj;
const v22 = new F(20, null);
a = v22;
const v26 = new F(22, a);
b = v26;
const v30 = new F(24, b);
c = v30;
print((((a.val + " ") + b.val) + " ") + c.val);
c.val = 46;
print((((a.val + " ") + b.val) + " ") + c.val);
b.val = 13;
print((((a.val + " ") + b.val) + " ") + c.val);
