function asm() {
    'use asm';
    function f(a2) {
        a2 = a2 | 0;
        while (1) {
            return 1;
        }
        return 0;
    }
    return { f: f };
}
let v9;
try { v9 = asm(); } catch (e) {}
const mod = v9;
function call_f() {
    try { mod.f(); } catch (e) {}
    try { call_f(); } catch (e) {}
}
try { call_f(); } catch (e) {}
