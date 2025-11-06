function test0() {
    const v5 = (28510759.1 >> 49) << 49;
    try { WScript.Echo(v5); } catch (e) {}
}
try { test0(); } catch (e) {}
try { test0(); } catch (e) {}
