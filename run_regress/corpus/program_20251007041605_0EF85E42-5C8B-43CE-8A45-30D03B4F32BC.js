try {
    class C0 {
        exec() {
            return null;
        }
    }
    ["ab",""];
    const v6 = /c/;
    try { ("abc").split(v6); } catch (e) {}
    [["a"]];
    const v12 = /a/;
    let v14;
    try { v14 = ("a").matchAll(v12); } catch (e) {}
    [...v14];
    const v18 = Symbol?.species;
    const v20 = {
        get() {
            return C0;
        },
    };
    try { Object.defineProperty(RegExp, v18, v20); } catch (e) {}
    ["abc"];
    const v25 = /c/;
    try { ("abc").split(v25); } catch (e) {}
    [];
    const v29 = /a/;
    let v31;
    try { v31 = ("a").matchAll(v29); } catch (e) {}
    [...v31];
} catch(e33) {
}
