function f0() {
}
try { testLenientAndStrict("let let_declared; let_declared=1", completesNormally, completesNormally); } catch (e) {}
try { f0(true, true); } catch (e) {}
