class C0 {
}
for (let i2 = 0; i2 < 10; i2++) {
    class C8 extends C0 {
        constructor() {
            super();
            C0 = Boolean;
        }
    }
    new C8();
    new C8();
}
print("pass");
