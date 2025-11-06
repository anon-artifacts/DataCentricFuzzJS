const v0 = () => {
    try {
        var max = 400;
        function f(a4) {
            if (a4) {
                const v6 = a4 - 1;
                try { f(v6); } catch (e) {}
            } else {
                g = {};
            }
            try { g.apply(null, arguments); } catch (e) {}
        }
        const v15 = max - 1;
        try { f(v15); } catch (e) {}
    } catch(e17) {
    }
    try { f(); } catch (e) {}
};
try { oomTest(v0); } catch (e) {}
