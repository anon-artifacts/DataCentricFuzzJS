var s = Symbol("foo");
var o = { [s]: "bar" };
function get(a8, a9) {
    return a8?.[a8];
}
get(o, s);
get(o, s);
get(o, s);
get(o, s);
get();
get(o, "funny");
get();
