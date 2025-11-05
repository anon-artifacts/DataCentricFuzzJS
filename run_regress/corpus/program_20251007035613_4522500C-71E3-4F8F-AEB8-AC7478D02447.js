function foo(a1, a2, a3) {
    while (a3) {
        if (a1) {
            return 1;
        } else {
            if (a1) {
                return 2;
            } else {
                throw "error";
            }
        }
    }
}
function bar() {
    try { foo.apply(this, arguments); } catch (e) {}
}
function baz(a12, a13, a14, a15) {
    try { bar(a12, a13, a14, a15); } catch (e) {}
}
try { noInline(baz); } catch (e) {}
for (let i20 = 0; i20 < 10000; ++i20) {
    try { baz(1, 2, 3, 4); } catch (e) {}
}
