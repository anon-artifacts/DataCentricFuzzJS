function f0() {
}
try { Reflect.parse("with({foo})bar"); } catch (e) {}
try { Reflect.parse("while({foo})bar"); } catch (e) {}
try { f0(true, true); } catch (e) {}
