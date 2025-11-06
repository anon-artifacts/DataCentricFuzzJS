console.log("This test checks that the Function constructor works correctly in the presence of single line comments.");
const v5 = new Function("return true//");
v5();
const v8 = new Function("return true;//");
v8();
const v13 = new Function("a", "return a//");
v13(true);
const v18 = new Function("a", "return a;//");
v18(true);
