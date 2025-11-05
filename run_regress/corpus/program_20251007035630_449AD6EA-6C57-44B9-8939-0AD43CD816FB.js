function f2() {
    return 127;
}
function f3() {
    return 2147483648;
}
class C4 extends f3 {
    static {
        try {
            this.p(this, this);
        } catch(e7) {
        }
    }
    #a = f2;
    [f3] = 2147483648;
    #d = 2147483648;
    static [2147483648];
}
function f8() {
    return f3;
}
f8.constructor(127);
