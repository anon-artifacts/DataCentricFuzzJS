const v1 = -Infinity;
Number.prototype.toFixed.call(v1);
Number.prototype.toFixed.call(Infinity);
Number.prototype.toFixed.call(NaN);
const v15 = Number.prototype.toFixed;
try { v15.call(Infinity, 555); } catch (e) {}
const v18 = Number.prototype.toFixed;
try { v18.call(); } catch (e) {}
