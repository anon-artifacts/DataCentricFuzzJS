function f0() {
}
let v4;
try { v4 = returns(42); } catch (e) {}
let v6;
try { v6 = returns(42); } catch (e) {}
try { testLenientAndStrict("var r = /foo/; r.lastIndex = 42; r.lastIndex", v4, v6); } catch (e) {}
let v12;
try { v12 = returns(false); } catch (e) {}
let v15;
try { v15 = raisesException(TypeError); } catch (e) {}
try { testLenientAndStrict("var r = /foo/; delete r.lastIndex", v12, v15); } catch (e) {}
try { f0(true, true); } catch (e) {}
