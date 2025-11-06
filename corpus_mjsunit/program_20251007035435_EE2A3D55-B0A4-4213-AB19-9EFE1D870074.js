for (const v3 of [,null]) {
    function f4() {
        const v6 = Array.prototype;
        Symbol.iterator;
        const v9 = v6[v6];
        try { v9.call(v3); } catch (e) {}
    }
    f4();
    function f13() {
        const v16 = Array.prototype.keys;
        try { v16.call(v3); } catch (e) {}
    }
    f13();
    function f19() {
        const v22 = Array.prototype.entries;
        try { v22.call(v3); } catch (e) {}
    }
    f19();
}
