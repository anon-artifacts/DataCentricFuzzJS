var BUGNUMBER = 1263139;
var summary = "String.prototype.match with non-string non-standard flags argument.";
print((BUGNUMBER + ": ") + summary);
var called;
const v14 = {
    toString() {
        called = true;
        return "";
    },
};
var flags = v14;
called = false;
("a").match("a", flags);
called = false;
("a").search("a", flags);
called = false;
("a").replace("a", "b", flags);
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
