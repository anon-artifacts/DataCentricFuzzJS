try { gczeal(0); } catch (e) {}
var test = "new class extends class { } { constructor() { super(); } }()";
const v6 = { assertEqBytecode: true };
try { evalWithCache(test, v6); } catch (e) {}
var test = "new class { method() { super.toString(); } }().method()";
const v12 = { assertEqBytecode: true };
try { evalWithCache(test, v12); } catch (e) {}
