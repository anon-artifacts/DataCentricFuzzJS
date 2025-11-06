function f0() {
}
var someVar = 1;
this?.someVar;
try { evaluate("assertEq(someVar, 1);"); } catch (e) {}
try { evaluate("assertEq(this.someVar, 1);"); } catch (e) {}
var someObject = { someOtherField: 2 };
var evalOpt = { envChainObject: someObject };
try { evaluate("assertEq(someVar, 1);", evalOpt); } catch (e) {}
try { evaluate("assertEq(this.someVar, undefined);", evalOpt); } catch (e) {}
someObject = { someVar: 2 };
evalOpt = { envChainObject: someObject };
var alsoSomeObject = someObject;
try { evaluate("assertEq(someVar, 2);", evalOpt); } catch (e) {}
try { evaluate("assertEq(this.someVar, 2);", evalOpt); } catch (e) {}
try { evaluate("assertEq(this, alsoSomeObject);", evalOpt); } catch (e) {}
try { evaluate("(function() { assertEq(someVar, 2);})()", evalOpt); } catch (e) {}
try { evaluate("(function() { assertEq(this !== alsoSomeObject, true);})()", evalOpt); } catch (e) {}
try { evaluate("(function() { assertEq(this.someVar, 1);})()", evalOpt); } catch (e) {}
var globalEvalOpt = { envChainObject: this };
try {
    try { evaluate("assertEq(someVar, 1);", globalEvalOpt); } catch (e) {}
    let v44;
    try { v44 = new Error("Globals aren't allowed as a envChainObject argument to evaluate"); } catch (e) {}
    throw v44;
} catch(e45) {
}
try { f0(true, true); } catch (e) {}
