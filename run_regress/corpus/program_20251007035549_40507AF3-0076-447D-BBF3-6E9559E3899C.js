function f(a1, a2) {
    var x = { a: a1 };
    switch (a2) {
        case "string":
    }
    var y = { b: a2 };
    return y;
}
f("a", "b");
f("a", "b");
f("a", "b");
var killer = f("bang", "bo" + "om");
killer.b;
