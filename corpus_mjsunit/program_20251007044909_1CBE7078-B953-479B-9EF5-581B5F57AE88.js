function trySetProperty(a1, a2, a3, a4) {
    function strictSetProperty() {
        'use strict';
        a1[a2] = a3;
    }
    try {
        strictSetProperty();
    } catch(e7) {
        return "throw";
    }
}
const v10 = { a: 0 };
var objs = [v10,{ a: 1 }];
for (let i17 = 0, i18 = objs.length; i17 < i18; i17++) {
    var o = objs[i17];
    var o2 = Object.preventExtensions(o);
    print((i17 + "  ") + o);
    trySetProperty(o, "baz", 17, true);
    "object " + i17;
}
