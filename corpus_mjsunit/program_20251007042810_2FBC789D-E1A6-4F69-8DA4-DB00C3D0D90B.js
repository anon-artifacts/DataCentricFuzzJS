function f() {
    for (let i2 = 0; i2 < 100; i2++) {
        if (i2 === 20) {
            var o = { x: 1 };
        }
        if (i2 >= 20) {
            let v17;
            try { v17 = getAllocationMetadata(o); } catch (e) {}
            var md = v17;
            (typeof md === "object") && (md !== null);
            typeof md?.index;
        }
    }
}
try { f(); } catch (e) {}
