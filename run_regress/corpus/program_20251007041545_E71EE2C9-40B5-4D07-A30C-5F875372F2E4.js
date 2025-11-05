var expected = "3,6,4,3,6,4,3,6,4,3,6,4,";
var actual = "";
function f() {
    var ss = [[1,2,3],[1,2,3,4,5,6],[1,2,3,4]];
    for (let i24 = 0; i24 < 12; ++i24) {
        actual += ss[i24 % 3].length + ",";
    }
}
f();
