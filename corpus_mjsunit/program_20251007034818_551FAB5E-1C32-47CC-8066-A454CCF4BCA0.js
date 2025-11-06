function f0() {
}
let v5;
try { v5 = parseRaisesException(SyntaxError); } catch (e) {}
try { testLenientAndStrict("function f(eval,[x]){}", parsesSuccessfully, v5); } catch (e) {}
try { f0(true, true); } catch (e) {}
