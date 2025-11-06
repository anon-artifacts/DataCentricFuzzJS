try {
    class C0 {
        exec() {
            return null;
        }
    }
    var r = /c/;
    ["ab",""];
    try { ("abc").split(r); } catch (e) {}
    [["c"]];
    let v14;
    try { v14 = ("c").matchAll(r); } catch (e) {}
    [...v14];
    const v17 = Symbol?.species;
    r.constructor = { [v17]: C0 };
    ["abc"];
    try { ("abc").split(r); } catch (e) {}
    [];
    let v25;
    try { v25 = ("c").matchAll(r); } catch (e) {}
    [...v25];
    ["ab",""];
    const v30 = /c/;
    try { ("abc").split(v30); } catch (e) {}
    [["c"]];
    const v36 = /c/;
    let v38;
    try { v38 = ("c").matchAll(v36); } catch (e) {}
    [...v38];
    const v40 = Symbol?.species;
    const v41 = { [v40]: C0 };
    const t31 = RegExp?.prototype;
    t31.constructor = v41;
    ["abc"];
    const v46 = /c/;
    try { ("abc").split(v46); } catch (e) {}
    [];
    const v50 = /c/;
    let v52;
    try { v52 = ("c").matchAll(v50); } catch (e) {}
    [...v52];
} catch(e54) {
}
