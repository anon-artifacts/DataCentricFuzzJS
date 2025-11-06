var d = 0;
function recurse() {
    if (++d == 25135) {
    }
    try { recurse(); } catch (e) {}
}
function f7() {
    try { recurse(); } catch (e) {}
}
try { f7(); } catch (e) {}
