var expected = "4,5,44,5,44,4,44,4,5,4,5,44,5,44,4,44,4,5,";
var actual = "";
function f() {
    const v11 = [1,2,3,4,5];
    var a = ["abcd",v11,{ length: 44 }];
    for (let i17 = 0; i17 < 6; ++i17) {
        var i1 = i17 % 3;
        var i2 = (i17 + 1) % 3;
        var i3 = (i17 + 2) % 3;
        actual += a[i1].length + ",";
        actual += a[i2].length + ",";
        actual += a[i3].length + ",";
    }
}
f();
