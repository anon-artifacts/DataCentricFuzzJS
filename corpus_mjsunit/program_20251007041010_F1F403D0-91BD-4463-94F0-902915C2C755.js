let v2;
try { v2 = evalcx("lazy"); } catch (e) {}
var n = v2;
try {
    let v5;
    try { v5 = serialize(n); } catch (e) {}
    var nbuf = v5;
} catch(e7) {
}
