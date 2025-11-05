try { gczeal(4); } catch (e) {}
function blah() {
    var i = 1;
    function o() {
    }
    function k() {
        i++;
    }
    o.x = 0;
    for (let i11 = 0; i11 < 100; ++i11) {
        i = { a: o, b: k };
        i++;
    }
}
try { blah(); } catch (e) {}
