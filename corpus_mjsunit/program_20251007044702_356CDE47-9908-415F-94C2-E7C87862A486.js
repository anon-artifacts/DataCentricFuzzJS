let v2;
try { v2 = evalcx("lazy"); } catch (e) {}
var g = v2;
const v4 = () => {
    const v6 = { global: g };
    let v8;
    try { v8 = evaluate("{ let eval; eval()}", v6); } catch (e) {}
    return v8;
};
try { v4(); } catch (e) {}
g?.TypeError;
const v12 = { global: g };
try { evaluate("{ let eval = parseInt; eval()}", v12); } catch (e) {}
