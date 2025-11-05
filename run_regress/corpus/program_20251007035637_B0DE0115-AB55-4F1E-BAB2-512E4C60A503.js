const v2 = Date.prototype;
let v3;
try { v3 = v2.setHours(Date, null); } catch (e) {}
v2.valueOf = null;
const t4 = Date.prototype;
t4.toString = null;
const v5 = new Date();
const v6 = new Date(v3);
try { v6.setUTCMinutes(v5); } catch (e) {}
