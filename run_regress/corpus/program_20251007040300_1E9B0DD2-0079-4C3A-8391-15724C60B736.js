function f0() {
}
("i-haK").toLowerCase();
("ı-hak").toUpperCase();
try { Intl.getCanonicalLocales("i-hak"); } catch (e) {}
["hak"];
const v11 = () => {
    let v13;
    try { v13 = Intl.getCanonicalLocales("i-haK"); } catch (e) {}
    return v13;
};
v11();
const v16 = () => {
    let v18;
    try { v18 = Intl.getCanonicalLocales("ı-hak"); } catch (e) {}
    return v18;
};
v16();
if (typeof f0 === "function") {
    f0(0, 0);
}
