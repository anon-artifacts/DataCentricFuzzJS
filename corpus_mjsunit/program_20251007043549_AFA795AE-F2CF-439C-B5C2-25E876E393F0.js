var BUGNUMBER = 1331009;
var summary = "Newline is allowed between await and operand";
print((BUGNUMBER + ": ") + summary);
async function foo() {
    return await 10;
}
var expr = foo;
expr();
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
