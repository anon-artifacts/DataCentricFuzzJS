let v1;
try { v1 = newGlobal(); } catch (e) {}
var g = v1;
const v3 = g?.DataView;
const v4 = g?.ArrayBuffer;
let v5;
try { v5 = new v4(); } catch (e) {}
try { new v3(v5); } catch (e) {}
