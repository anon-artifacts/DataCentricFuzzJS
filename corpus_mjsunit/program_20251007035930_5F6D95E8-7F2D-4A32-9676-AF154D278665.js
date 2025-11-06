function get1(a1, a2) {
    return a1[1];
}
function with_double(a5) {
    const v6 = [a5,a5,a5];
    var o = { a: v6 };
    const t6 = o.a;
    t6.some_property = 1;
    return get1(o.a);
}
function with_tagged(a14) {
    var l = [{},a14,a14];
    return get1(l);
}
with_double(0.5);
with_tagged({});
with_double(0.6);
with_tagged(null);
with_double(0.5);
with_tagged({});
with_double(0.7);
