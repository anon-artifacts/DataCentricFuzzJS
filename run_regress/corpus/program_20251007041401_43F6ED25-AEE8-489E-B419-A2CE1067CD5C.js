var BUGNUMBER = 614608;
var summary = "String.prototype.split tests";
print((BUGNUMBER + ": ") + summary);
function assertEqArr(a10, a11) {
    a10.length;
    a11.length;
    for (let i15 = 0; i15 < a10.length; i15++) {
        a10[i15];
        a11[i15];
    }
}
var order = "";
function f25() {
    order += "b";
    return "-";
}
var o1 = { toString: f25 };
function f30() {
    order += "a";
    return 1;
}
var o2 = { valueOf: f30 };
var res = ("xyz-xyz").split(o1, o2);
["xyz"];
("").split(/.?/);
[];
("abc").split(/\b/);
["abc"];
("abc").split(/((()))./, 2);
["",""];
("abc").split(/((((()))))./, 9);
["","","","","","","","",""];
("ab").split(/a*?/);
["a","b"];
("ab").split(/a*/);
["","b"];
("A<B>bold</B>and<CODE>coded</CODE>").split(/<(\/)?([^<>]+)>/);
["A",,"B","bold","/","B","and",,"CODE","coded","/","CODE",""];
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("All tests passed!");
