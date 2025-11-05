function testUndefinedPropertyAccess() {
    var x = [1,2,3];
    var y = {};
    var a = { foo: 1 };
    y.__proto__ = x;
    var z = [x,x,x,y,y,y,y,a,a,a];
    var s = "";
    for (let i16 = 0; i16 < z.length; ++i16) {
        s += z[i16].foo;
    }
    return s;
}
testUndefinedPropertyAccess();
