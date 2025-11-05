try { Object.getOwnPropertyNames(this); } catch (e) {}
function f3() {
    this[0] = null;
    try { Object.freeze(this); } catch (e) {}
}
try { oomTest(f3); } catch (e) {}
