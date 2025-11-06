const v2 = { value: 4 };
var obj4 = Object.create(null, { f4: v2 });
const v8 = { value: 3 };
var obj3 = Object.create(obj4, { f3: v8 });
const v13 = { value: 2 };
var obj2 = Object.create(obj3, { f2: v13 });
const v18 = { value: 1 };
var obj1 = Object.create(obj2, { f1: v18 });
const v23 = { value: 0 };
var obj0 = Object.create(obj1, { f0: v23 });
function get4(a28) {
    return a28.f4;
}
get4(obj0);
get4(obj0);
get4(obj0);
get4(obj0);
