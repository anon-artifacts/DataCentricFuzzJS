const v1 = {};
var o = { a: 1.5, b: v1 };
function f(a5) {
    var result = [];
    for (const v8 in a5) {
        const v9 = a5[v8];
        result[result.length] = v9;
    }
    return result;
}
f(o);
f(o);
var array = f(o);
o.a = 1.7;
array[0];
