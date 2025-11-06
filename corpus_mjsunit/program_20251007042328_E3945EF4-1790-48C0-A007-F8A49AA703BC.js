try { gczeal(14); } catch (e) {}
function f() {
    function f4() {
        "" ^ Object;
    }
    try { f4(); } catch (e) {}
}
x = 0;
for (let i12 = 0; i12 < 99; ++i12) {
    let v18;
    try { v18 = f(); } catch (e) {}
    x += v18;
}
try {
    x = true;
    for (let i23 = 0; i23 < 10; ++i23) {
        function f29() {
            function g() {
                x++;
            }
            try { g(); } catch (e) {}
        }
        var f = f29;
        try { f(); } catch (e) {}
    }
} catch(e36) {
    e36 instanceof TypeError;
}
