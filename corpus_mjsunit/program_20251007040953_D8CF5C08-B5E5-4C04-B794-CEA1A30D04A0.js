function bar(a1, a2) {
    with (a1) {
        return a1 + a2;
    }
}
const v4 = [bar,bar,bar,bar];
const v7 = [bar,bar,,null];
function f8() {
    for (let i16 = this?.functions, i17 = this?.receivers, i18 = a?.length, i19 = 0; i19 < i18; i19++) {
        const v30 = i17?.[i19];
        const v32 = i16?.[i19];
        try { v32.apply(v30, arguments); } catch (e) {}
    }
}
var obj = { functions: v4, receivers: v7, foo: f8 };
try { obj.foo(1, 2, 3, 4); } catch (e) {}
try { obj.foo(1, 2, 3, 4); } catch (e) {}
try { obj.foo(1, 2, 3, 4); } catch (e) {}
