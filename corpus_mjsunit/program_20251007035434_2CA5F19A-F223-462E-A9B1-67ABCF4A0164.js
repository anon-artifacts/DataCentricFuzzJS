function get(a1) {
    return a1;
}
function f(a3) {
    const v5 = get(0);
    const v7 = get(1);
    const v9 = get("foo");
    const v11 = get(true);
    const v13 = get(false);
    const v15 = get({});
    const v17 = get(null);
    const v19 = Number.MIN_VALUE;
    switch (a3) {
        case v5:
            return 0;
        case v7:
            return 1;
        case v9:
            return "foo";
        case v11:
            return true;
        case v13:
            return false;
        case v15:
            return {};
        case v17:
            return null;
        case v19:
            return Number.MIN_VALUE;
        case Math:
            return Math;
        default:
            return -123;
    }
}
f(0);
f(-0);
f(1);
f("foo");
f(true);
f(false);
f({});
-123;
f([]);
-123;
f(Math);
f({ x: 1 });
-123;
f(333);
-123;
f(null);
f(undefined);
-123;
f(Number.MIN_VALUE);
Number.MIN_VALUE;
