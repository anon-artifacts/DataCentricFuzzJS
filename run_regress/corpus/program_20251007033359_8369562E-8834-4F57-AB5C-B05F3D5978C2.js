const v1 = new Date();
class C2 {
}
class C3 {
    static [v1] = C2;
    static {
        C2[C2] = super[C2];
    }
    2147483649 = v1;
}
new C3();
