const v1 = String.prototype;
Symbol.iterator;
delete v1[v1];
function f5() {
    for (const v7 of "abc") {
    }
}
try { f5(); } catch (e) {}
function f10() {
    const v12 = new String("abc");
    for (const v13 of v12) {
    }
}
try { f10(); } catch (e) {}
