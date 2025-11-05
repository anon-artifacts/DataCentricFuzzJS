var BUGNUMBER = 622646;
var summary = "Shadowing an exception identifier in a catch block with a " + "|const| or |let| declaration should throw an error";
print((BUGNUMBER + ": ") + summary);
function assertRedeclarationErrorThrown(a12) {
    try {
        evaluate(a12);
        const v17 = new Error("Redeclaration error wasn't thrown");
        throw v17;
    } catch(e18) {
        e18.message.indexOf("catch") > 0;
        "wrong error, got " + e18.message;
    }
}
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
