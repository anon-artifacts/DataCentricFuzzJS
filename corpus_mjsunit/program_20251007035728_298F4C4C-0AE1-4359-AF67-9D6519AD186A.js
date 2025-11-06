let v1;
try { v1 = newGlobal(); } catch (e) {}
var otherGlobal = v1;
const v3 = otherGlobal?.Proxy;
const v4 = {};
const v5 = {};
let v6;
try { v6 = new v3(v4, v5); } catch (e) {}
var proxy = v6;
try { Int8Array.set(proxy); } catch (e) {}
