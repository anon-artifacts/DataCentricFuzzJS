const v1 = [];
let v4;
try { v4 = Reflect.construct(Array, v1, Object); } catch (e) {}
var a1 = v4;
const v7 = { sameZoneAs: this };
let v9;
try { v9 = newGlobal(v7); } catch (e) {}
var g = v9;
const v11 = g?.Array;
let v15;
try { v15 = new v11(1, 2, 3); } catch (e) {}
var a2 = v15;
a1?.length;
a2?.length;
