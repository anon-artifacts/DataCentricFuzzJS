function f0() {
}
let v5;
try { v5 = parseRaisesException(SyntaxError); } catch (e) {}
try { testLenientAndStrict("var eval;", parsesSuccessfully, v5); } catch (e) {}
let v10;
try { v10 = parseRaisesException(SyntaxError); } catch (e) {}
try { testLenientAndStrict("var x,eval;", parsesSuccessfully, v10); } catch (e) {}
let v14;
try { v14 = parseRaisesException(SyntaxError); } catch (e) {}
try { testLenientAndStrict("var arguments;", parsesSuccessfully, v14); } catch (e) {}
let v18;
try { v18 = parseRaisesException(SyntaxError); } catch (e) {}
try { testLenientAndStrict("var x,arguments;", parsesSuccessfully, v18); } catch (e) {}
try { f0(true, true); } catch (e) {}
