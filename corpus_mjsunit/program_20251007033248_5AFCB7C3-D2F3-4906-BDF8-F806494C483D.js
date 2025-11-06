function Module() {
    'use asm';
    function if0(a2, a3) {
        a2 = a2 | 0;
        a3 = a3 | 0;
        if ((a2 | 0) == 0 ? (a3 | 0) == 0 : 0) {
            return 1;
        }
        return 0;
    }
    return { if0: if0 };
}
var if0 = Module().if0;
try { if0(0, 0); } catch (e) {}
try { if0(11, 0); } catch (e) {}
const v35 = -1;
try { if0(0, v35); } catch (e) {}
const v39 = -1024;
try { if0(v39, 1); } catch (e) {}
function Module() {
    'use asm';
    function if1(a44, a45) {
        a44 = a44 | 0;
        a45 = a45 | 0;
        if ((a44 | 0) == 0 ? (a45 | 0) == 0 : 1) {
            return 0;
        }
        return 1;
    }
    return { if1: if1 };
}
var if1 = Module().if1;
if1(0, 0);
if1(11, 0);
if1(0, -1);
if1(-1024, 9);
