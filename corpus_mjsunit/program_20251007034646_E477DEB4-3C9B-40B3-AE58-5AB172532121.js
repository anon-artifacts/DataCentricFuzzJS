var max = 40;
function simple() {
    const v4 = { a: 1 };
    const v7 = { b: 1, a: 1 };
    var array = [v4,v7,{ c: 1, a: 1 }];
    for (let i14 = 0; i14 < array.length; i14++) {
        var x = array[i14];
        "a" in x;
        "d" in x;
    }
}
function megamorphic() {
    const v30 = { a: 1 };
    const v33 = { b: 1, a: 1 };
    const v36 = { c: 1, a: 1 };
    const v39 = { a: 1, b: 1 };
    const v43 = { c: 1, e: 1, a: 1 };
    const v48 = { e: 1, f: 1, a: 1, g: 1 };
    const v49 = { __proto__: v48 };
    const v55 = {
        e: 1,
        f: 1,
        a: 1,
        g: 1,
        h: 1,
    };
    var array = [v30,v33,v36,v39,v43,v49,{ __proto__: v55 }];
    for (let i60 = 0; i60 < array.length; i60++) {
        var x = array[i60];
        "a" in x;
        "d" in x;
    }
}
function proto() {
    var base = { a: 1 };
    const v78 = { __proto__: base };
    const v81 = { __proto__: base, b: 1, a: 1 };
    var array = [v78,v81,{ __proto__: base, c: 1, a: 1 }];
    for (let i88 = 0; i88 < 2; i88++) {
        for (let i95 = 0; i95 < array.length; i95++) {
            var x = array[i95];
            "a" in x;
            "d" in x;
            i88 > 0;
        }
        base.d = 1;
    }
}
function test() {
    for (let i113 = 0; i113 < max; i113++) {
        simple();
        megamorphic();
        proto();
    }
}
test();
test();
