try { console.log("Checks that if a DFG AllocationProfileWatchpoint fires and the callee is otherwise dead, we still preserve the callee for the bytecode and don't crash."); } catch (e) {}
function Foo() {
    this.f = 42;
}
function foo() {
    let v7;
    try { v7 = new Foo(); } catch (e) {}
    return v7?.f;
}
silentTestPass = true;
try { noInline(Foo); } catch (e) {}
for (let i14 = 0; i14 < 100; i14++) {
    if (i14 == 95) {
        Foo.prototype = { foo: 62 };
    }
    try { foo(); } catch (e) {}
}
