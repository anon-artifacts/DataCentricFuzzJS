class C0 {
}
class C1 {
}
class C2 {
}
class C3 extends C2 {
    constructor() {
        try {
            super();
        } catch(e5) {
            let v6;
            try { v6 = new C1(); } catch (e) {}
            throw v6;
        }
    }
}
const v15 = {
    get(a9, a10, a11) {
        if (a10 === "prototype") {
            const v14 = new C0();
            throw v14;
        }
    },
};
const v16 = new Proxy(C2, v15);
var thrower = v16;
const v18 = () => {
    const v19 = [];
    let v21;
    try { v21 = Reflect.construct(C3, v19, thrower); } catch (e) {}
    return v21;
};
v18();
const v23 = () => {
    const v24 = [];
    let v26;
    try { v26 = Reflect.construct(C3, v24, thrower); } catch (e) {}
    return v26;
};
v23();
const v28 = () => {
    const v29 = [];
    let v31;
    try { v31 = Reflect.construct(C3, v29, thrower); } catch (e) {}
    return v31;
};
v28();
