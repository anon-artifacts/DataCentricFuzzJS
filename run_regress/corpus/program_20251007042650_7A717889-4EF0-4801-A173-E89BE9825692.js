function verify(a1, a2) {
    if (a1 != a2) {
        print((("ERROR: " + a1) + " != ") + a2);
    }
}
var objs = [5,,"c","test",[1,2,3]];
for (let i22 = 0; i22 < objs.length; ++i22) {
    try {
        throw objs[i22];
    } catch(e29) {
        print("caught " + e29);
        verify(e29, objs[i22]);
    }
    try {
        try {
            throw objs[i22];
        } finally {
            print("inner finally, i = " + i22);
        }
    } catch(e41) {
        print("caught " + e41);
        verify(e41, objs[i22]);
    } finally {
        print("outer finally, i = " + i22);
    }
    try {
        try {
            try {
                throw objs[i22];
            } finally {
                print("finally #3, i = " + i22);
            }
        } catch(e57) {
            print("caught " + e57);
            verify(e57, objs[i22]);
        } finally {
            print("finally #2, i = " + i22);
            throw "another throw";
        }
    } catch(e69) {
        print("caught " + e69);
        verify(e69, "another throw");
    }
}
