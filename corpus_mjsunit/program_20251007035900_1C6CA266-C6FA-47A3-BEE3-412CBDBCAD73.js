function f0() {
}
const v1 = () => {
    const v2 = `try { throw {} } catch ({e}) { var e; }`;
    let v4;
    try { v4 = evaluate(v2); } catch (e) {}
    return v4;
};
try { v1(); } catch (e) {}
const v7 = () => {
    const v8 = `try { throw {} } catch ({e}) { eval('var e'); }`;
    let v10;
    try { v10 = evaluate(v8); } catch (e) {}
    return v10;
};
try { v7(); } catch (e) {}
const v12 = () => {
    const v14 = `try { throw {} } catch ({e}) { var e; }`;
    let v15;
    try { v15 = new Function(v14); } catch (e) {}
    return v15;
};
v12();
new Function(`try { throw {} } catch ({e}) { eval('var e'); }`);
if (typeof f0 === "function") {
    f0(true, true);
}
