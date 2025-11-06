try { gczeal(2); } catch (e) {}
for (let i4 = 0; i4 < 20; i4++) {
    function f() {
        for (let i12 = 0; i12 < 3; i12++) {
            function f18() {
            }
            try { f18(); } catch (e) {}
        }
    }
    try { f(); } catch (e) {}
}
