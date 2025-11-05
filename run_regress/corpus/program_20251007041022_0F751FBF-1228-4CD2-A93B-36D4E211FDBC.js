function testChangingObjectWithLength() {
    var obj = { length: 10 };
    var dense = [0,1,2,3,4,5,6,7,8,9];
    var slow = [0,1,2,3,4,5,6,7,8,9];
    slow.slow = 5;
    var objs = [obj,obj,obj,obj,obj,obj,obj,obj,dense,dense,dense,dense,obj,obj,obj,obj,slow,slow,slow,slow,dense,dense,dense,dense,dense,dense,dense,dense,slow,slow,slow,slow,slow,slow,slow,slow,obj,obj,obj,obj];
    var counter = 0;
    for (let i35 = 0, i36 = objs.length; i35 < i36; i35++) {
        var o = objs[i35];
        for (let i46 = 0; i46 < o.length; i46++) {
            counter++;
        }
    }
    return counter;
}
testChangingObjectWithLength();
