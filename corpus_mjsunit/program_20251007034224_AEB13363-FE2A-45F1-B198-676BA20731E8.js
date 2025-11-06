let v1;
try { v1 = newGlobal(); } catch (e) {}
s = v1;
try {
    try { evalcx("        function g() {            h()        }        for (p in this) {            function h(h) {                ''instanceof 5            }        }        h.valueOf=g;        h==9    ", s); } catch (e) {}
} catch(e7) {
}
try {
    try { evalcx("throw h", s); } catch (e) {}
} catch(e12) {
    try {
        "" + e12;
    } catch(e15) {
    }
}
