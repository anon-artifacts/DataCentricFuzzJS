function f0() {
    var array = [true,false,null,void 0];
    for (let i9 = 0; i9 < 1000000; ++i9) {
        for (let i16 = 0; i16 < array.length; ++i16) {
            for (let i22 = i16; i22 < array.length; ++i22) {
                var actual = array[i16] === array[i22];
                var expected = i16 == i22;
                if (actual != expected) {
                    throw (("Error: bad result for j = " + i16) + ", k = ") + i22;
                }
            }
        }
    }
}
f0();
