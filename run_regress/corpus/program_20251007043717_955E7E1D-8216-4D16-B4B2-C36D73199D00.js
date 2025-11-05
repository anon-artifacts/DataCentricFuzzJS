let v2;
try { v2 = this.hasOwnProperty("Intl"); } catch (e) {}
if (v2) {
    try { gczeal(14); } catch (e) {}
    b = {};
    let v10;
    try { v10 = evalcx("lazy"); } catch (e) {}
    b.__proto__ = v10;
    const v13 = b?.Intl;
    let v14;
    try { v14 = v13.Collator(0); } catch (e) {}
    function m(a16) {
    }
    try { m(v14); } catch (e) {}
}
