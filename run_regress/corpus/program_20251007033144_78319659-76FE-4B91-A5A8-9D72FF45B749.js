let v2;
try { v2 = Reflect.parse("function f() { return 3; }"); } catch (e) {}
var ast = v2;
ast?.body?.[0]?.id?.name;
const v12 = ast?.body?.[0]?.id?.name;
try { isLatin1(v12); } catch (e) {}
let v17;
try { v17 = Reflect.parse("function fሀ() { return 3; }"); } catch (e) {}
var ast = v17;
ast?.body?.[0]?.id?.name;
var o = {};
function f27() {
    return 1;
}
function f29() {
    return 2;
}
const v33 = { get: f27, set: f29, enumerable: true, configurable: true };
try { Object.defineProperty(o, "prop", v33); } catch (e) {}
try { o.toSource(); } catch (e) {}
function f39() {
    return "ሀ";
}
function f41() {
    return "ሀ";
}
const v44 = { get: f39, set: f41, enumerable: true };
try { Object.defineProperty(o, "prop", v44); } catch (e) {}
try { o.toSource(); } catch (e) {}
function f48() {
    return 10;
}
var ff = f48;
function f51() {
    return "((11))";
}
ff.toSource = f51;
const v55 = { get: ff, set: ff, enumerable: true };
try { Object.defineProperty(o, "prop", v55); } catch (e) {}
try { o.toSource(); } catch (e) {}
test = "'string123';";
const v64 = { assertEqBytecode: true, assertEqResult: true };
try { evalWithCache(test, v64); } catch (e) {}
test = "'stringሴ';";
const v70 = { assertEqBytecode: true, assertEqResult: true };
try { evalWithCache(test, v70); } catch (e) {}
