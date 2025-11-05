function dummy() {
}
dummy();
const v4 = Function.prototype.apply;
var obj = { apply: v4 };
try { obj.apply(); } catch (e) {}
dummy();
