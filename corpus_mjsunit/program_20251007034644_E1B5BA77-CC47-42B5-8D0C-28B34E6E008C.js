function f0() {
}
function a() {
    var b = { a: "A" };
    class C5 {
        constructor(a7) {
            return b?.[b];
        }
    }
    const v9 = () => {
        const v10 = /a/;
        let v12;
        try { v12 = ("a").replace(v10, C5); } catch (e) {}
        return v12;
    };
    v9();
}
function b() {
    class C16 {
        constructor(a18, a19) {
            return a18 - a19;
        }
    }
    const v21 = () => {
        const v25 = [1,2,3];
        let v26;
        try { v26 = v25.sort(C16); } catch (e) {}
        return v26;
    };
    v21();
}
a();
b();
if (typeof f0 === "function") {
    f0(0, 0, "OK");
}
