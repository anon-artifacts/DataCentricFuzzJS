function bar() {
}
try { noInline(bar); } catch (e) {}
function baz() {
}
function foo() {
    if (typeof baz !== "undefined") {
    } else {
        while (true) {
            try { bar(); } catch (e) {}
        }
    }
}
try { noInline(foo); } catch (e) {}
for (let i12 = 0; i12 < 10000; ++i12) {
    try { foo(); } catch (e) {}
}
