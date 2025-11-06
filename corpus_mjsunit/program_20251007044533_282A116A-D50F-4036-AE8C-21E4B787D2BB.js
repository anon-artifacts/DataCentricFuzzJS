console.log("This tests that propertyIsEnumerable works according to the ECMA spec.");
const v4 = new Array();
a = v4;
a.foo = "bar";
var aVarDecl;
function aFunctionDecl() {
}
var global = this;
a.propertyIsEnumerable("length");
a.propertyIsEnumerable("foo");
a.propertyIsEnumerable("non-existant");
global.propertyIsEnumerable("aVarDecl");
global.propertyIsEnumerable("aFunctionDecl");
global.propertyIsEnumerable("Math");
global.propertyIsEnumerable("NaN");
global.propertyIsEnumerable("undefined");
