let v3;
try { v3 = gcparam("gcBytes"); } catch (e) {}
const v7 = v3 + (4 * 1024);
try { gcparam("maxBytes", v7); } catch (e) {}
var max = 400;
function f(a12) {
    if (a12) {
        const v14 = a12 - 1;
        try { f(v14); } catch (e) {}
    } else {
        function f16(a17, a18) {
        }
        g = { apply: f16 };
    }
    try { g.apply(null, arguments); } catch (e) {}
}
const v26 = max - 1;
try { f(v26); } catch (e) {}
