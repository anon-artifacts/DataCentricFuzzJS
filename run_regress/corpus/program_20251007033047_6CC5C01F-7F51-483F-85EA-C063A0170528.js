try { gczeal(2); } catch (e) {}
for (let i4 = 0; i4 < 99; i4++) {
    function f10() {
        function f11() {
            function f12(a13) {
                const v14 = (a15) => {
                    return a15;
                };
                const v17 = {
                    e: v14,
                    function() {
                    },
                };
                return v17;
            }
            try { new f12(); } catch (e) {}
        }
        return f11;
    }
    let v19;
    try { v19 = f10(); } catch (e) {}
    try { v19(); } catch (e) {}
}
