function f0() {
}
function base() {
}
class C2 extends base {
    constructor() {
        let v6;
        try { v6 = Object.setPrototypeOf(C2, null); } catch (e) {}
        super(v6);
    }
}
try { new C2(); } catch (e) {}
class C8 extends base {
    constructor() {
        function thrower() {
            let v12;
            try { v12 = new Error(); } catch (e) {}
            throw v12;
        }
        let v13;
        try { v13 = thrower(); } catch (e) {}
        super(v13);
    }
}
Object.setPrototypeOf(C8, Math.sin);
const v18 = () => {
    let v19;
    try { v19 = new C8(); } catch (e) {}
    return v19;
};
v18();
if (typeof f0 === "function") {
    f0(0, 0, "OK");
}
