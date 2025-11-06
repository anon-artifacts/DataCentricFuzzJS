function f() {
    {
        function g() {
        }
        const v2 = () => {
            return g;
        };
        var h = [v2];
        for (;;) {
            break;
        }
        throw h[0];
    }
}
try { f(); } catch (e) {}
