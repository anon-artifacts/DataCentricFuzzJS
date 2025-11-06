const v1 = { newCompartment: true };
let v3;
try { v3 = newGlobal(v1); } catch (e) {}
const root3 = v3;
function test(a6) {
}
try { test(Map); } catch (e) {}
try { test(Set); } catch (e) {}
