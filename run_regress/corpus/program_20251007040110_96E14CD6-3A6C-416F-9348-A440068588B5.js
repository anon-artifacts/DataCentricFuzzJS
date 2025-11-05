var str = "a";
var searchStr = "abc";
const v5 = new Object();
var position = v5;
var valueOfCalled = false;
function positionValueOf() {
    valueOfCalled = true;
    return 0;
}
position.valueOf = positionValueOf;
var result = str.lastIndexOf(searchStr, position);
-1;
if (typeof reportCompare == "function") {
    reportCompare(0, 0);
}
