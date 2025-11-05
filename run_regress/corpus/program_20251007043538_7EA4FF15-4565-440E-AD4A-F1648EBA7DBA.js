var x = [,,];
try { Object.preventExtensions(x); } catch (e) {}
try {
    try { new WeakMap(x); } catch (e) {}
} catch(e7) {
}
try { WScript.Echo("passed"); } catch (e) {}
