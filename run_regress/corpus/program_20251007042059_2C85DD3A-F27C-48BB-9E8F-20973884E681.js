class C0 {
    static func88() {
    }
}
if ("func88" == C0?.func88?.name) {
    try { WScript.Echo("Pass"); } catch (e) {}
} else {
    try { WScript.Echo("Fail"); } catch (e) {}
}
