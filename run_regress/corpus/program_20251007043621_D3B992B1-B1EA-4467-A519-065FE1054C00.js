function dummy() {
}
function funcThrow() {
    dummy();
    throw 123;
    try { dummy(); } catch (e) {}
}
dummy();
try { funcThrow(); } catch (e) {}
dummy();
