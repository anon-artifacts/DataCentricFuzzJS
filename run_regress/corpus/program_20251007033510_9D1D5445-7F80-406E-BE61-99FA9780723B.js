function shouldEqual(a1, a2, a3) {
    if (a2 != a3) {
        throw (((a1 + ": ERROR: expect ") + a3) + ", actual ") + a2;
    }
}
var exception;
let v15;
try { v15 = ("x").repeat(1073741823); } catch (e) {}
s2 = v15;
r0 = /((?=\S))/ygi;
try {
    try { s2.replace(r0, ""); } catch (e) {}
} catch(e23) {
    exception = e23;
}
try { shouldEqual(10000, exception, "Error: Out of memory"); } catch (e) {}
