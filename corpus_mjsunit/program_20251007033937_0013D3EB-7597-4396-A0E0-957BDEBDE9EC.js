function bar(a1) {
    if (a1 != a1) {
        return;
    }
}
function foo() {
    const v6 = typeof arguments?.[0];
    try { bar(v6); } catch (e) {}
}
try { foo(); } catch (e) {}
try { foo(); } catch (e) {}
try { foo(); } catch (e) {}
try { WScript.Echo("Passed"); } catch (e) {}
