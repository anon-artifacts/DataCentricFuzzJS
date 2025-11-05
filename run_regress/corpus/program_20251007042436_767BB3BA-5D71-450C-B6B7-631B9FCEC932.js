function f0() {
}
function f3() {
    return "get-x";
}
const v6 = { get: f3, configurable: true };
try { Object.defineProperty(this, "x", v6); } catch (e) {}
const v9 = `{\n  function x() { return "fun-x"; }\n}`;
try { evaluate(v9); } catch (e) {}
try { f0(x, "get-x"); } catch (e) {}
