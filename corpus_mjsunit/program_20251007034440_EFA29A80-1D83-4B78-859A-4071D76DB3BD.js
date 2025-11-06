function f0() {
}
let v5;
try { v5 = parseRaisesException(SyntaxError); } catch (e) {}
try { testLenientAndStrict("let eval;", parsesSuccessfully, v5); } catch (e) {}
let v10;
try { v10 = parseRaisesException(SyntaxError); } catch (e) {}
try { testLenientAndStrict("let x,eval;", parsesSuccessfully, v10); } catch (e) {}
let v14;
try { v14 = parseRaisesException(SyntaxError); } catch (e) {}
try { testLenientAndStrict("let arguments;", parsesSuccessfully, v14); } catch (e) {}
let v18;
try { v18 = parseRaisesException(SyntaxError); } catch (e) {}
try { testLenientAndStrict("let x,arguments;", parsesSuccessfully, v18); } catch (e) {}
let v22;
try { v22 = parseRaisesException(SyntaxError); } catch (e) {}
try { testLenientAndStrict("const eval = undefined;", parsesSuccessfully, v22); } catch (e) {}
let v26;
try { v26 = parseRaisesException(SyntaxError); } catch (e) {}
try { testLenientAndStrict("const x = undefined,eval = undefined;", parsesSuccessfully, v26); } catch (e) {}
let v30;
try { v30 = parseRaisesException(SyntaxError); } catch (e) {}
try { testLenientAndStrict("const arguments = undefined;", parsesSuccessfully, v30); } catch (e) {}
let v34;
try { v34 = parseRaisesException(SyntaxError); } catch (e) {}
try { testLenientAndStrict("const x = undefined,arguments = undefined;", parsesSuccessfully, v34); } catch (e) {}
let v38;
try { v38 = parseRaisesException(SyntaxError); } catch (e) {}
try { testLenientAndStrict("for (let eval in [])break;", parsesSuccessfully, v38); } catch (e) {}
let v42;
try { v42 = parseRaisesException(SyntaxError); } catch (e) {}
try { testLenientAndStrict("for (let [eval] in [])break;", parsesSuccessfully, v42); } catch (e) {}
let v46;
try { v46 = parseRaisesException(SyntaxError); } catch (e) {}
try { testLenientAndStrict("for (let {x:eval} in [])break;", parsesSuccessfully, v46); } catch (e) {}
let v50;
try { v50 = parseRaisesException(SyntaxError); } catch (e) {}
try { testLenientAndStrict("for (let arguments in [])break;", parsesSuccessfully, v50); } catch (e) {}
let v54;
try { v54 = parseRaisesException(SyntaxError); } catch (e) {}
try { testLenientAndStrict("for (let [arguments] in [])break;", parsesSuccessfully, v54); } catch (e) {}
let v58;
try { v58 = parseRaisesException(SyntaxError); } catch (e) {}
try { testLenientAndStrict("for (let {x:arguments} in [])break;", parsesSuccessfully, v58); } catch (e) {}
try { f0(true, true); } catch (e) {}
