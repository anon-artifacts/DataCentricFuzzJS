class C1 {
    static {
        let v2 = this;
        const t3 = "toString";
        t3.__proto__ = v2;
        v2 *= v2;
    }
}
