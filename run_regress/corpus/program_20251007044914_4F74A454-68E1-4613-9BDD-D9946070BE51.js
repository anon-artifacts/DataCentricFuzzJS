function f0() {
}
x = f0;
let v3;
try { v3 = new WeakMap(); } catch (e) {}
y = v3;
const v5 = {};
try { selectforgc(v5); } catch (e) {}
let v10;
try { v10 = Symbol(); } catch (e) {}
try { y.set(x, v10); } catch (e) {}
