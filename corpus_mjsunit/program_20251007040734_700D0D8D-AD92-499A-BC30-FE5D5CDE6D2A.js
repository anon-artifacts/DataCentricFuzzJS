try { gczeal(0); } catch (e) {}
function MyObject(a4) {
}
let v8;
try { v8 = gcparam("gcBytes"); } catch (e) {}
const v12 = v8 + (4 * 1);
try { gcparam("maxBytes", v12); } catch (e) {}
try { gczeal(4); } catch (e) {}
function test() {
}
let v17;
try { v17 = new test(); } catch (e) {}
var obj = v17;
