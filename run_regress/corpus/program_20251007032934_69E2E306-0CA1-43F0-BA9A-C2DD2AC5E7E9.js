const v4 = new Function("eval('var foo = 915805');" + "return foo;");
v4();
const v14 = new Function((("eval('function foo() {" + "return 915805;") + "}');") + "return foo;");
const t3 = v14();
t3();
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
