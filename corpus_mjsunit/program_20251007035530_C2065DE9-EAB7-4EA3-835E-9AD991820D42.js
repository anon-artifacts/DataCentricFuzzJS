const v2 = 4294967295 - 3;
let v4;
try { v4 = ("a").repeat(v2); } catch (e) {}
a = v4;
const v6 = () => {
    const v10 = "a" + a;
    let v11;
    try { v11 = new RegExp(v10); } catch (e) {}
    return v11;
};
try { v6(); } catch (e) {}
