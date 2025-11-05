function printStatus(a1) {
    try { a1.split("\n"); } catch (e) {}
}
function enterFunc() {
    return undefined;
}
try { test(); } catch (e) {}
function test() {
    try { enterFunc(); } catch (e) {}
    try { printStatus(""); } catch (e) {}
    for (let i13 = 0; false;) {
    }
    try { new test(); } catch (e) {}
}
