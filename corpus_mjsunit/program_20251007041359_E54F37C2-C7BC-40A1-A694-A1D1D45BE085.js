class C0 {
    constructor() {
    }
}
class C2 extends C0 {
    constructor(a4) {
        if (a4) {
            super();
        }
    }
}
const v6 = new C2(1);
test = v6;
const v9 = new C2(1);
test = v9;
const v12 = new C2(1);
test = v12;
const v14 = () => {
    try { new C2(0); } catch (e) {}
};
v14();
