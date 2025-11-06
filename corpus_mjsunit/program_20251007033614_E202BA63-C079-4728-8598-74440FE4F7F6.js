try { console.log("Tests that a dead use of Math.min(a,b) at least speculates that its arguments are indeed numbers."); } catch (e) {}
function foo(a4, a5) {
    const v6 = a4?.f;
    const v7 = a5?.f;
    try { Math.min(v6, v7); } catch (e) {}
    return 100;
}
function bar(a12, a13) {
    const v14 = a12?.f;
    const v15 = a13?.f;
    try { Math.min(v14, v15); } catch (e) {}
    return 100;
}
var x = { f: 42 };
var y = { f: 43 };
var ok = null;
var expected = 42;
var empty = "";
silentTestPass = true;
try { noInline(foo); } catch (e) {}
try { noInline(bar); } catch (e) {}
for (let i37 = 0; i37 < 200; i37++) {
    if (i37 == 150) {
        function f45() {
            ok = i37;
            return 37;
        }
        const v47 = { valueOf: f45 };
        x = { f: v47 };
        expected = 37;
    }
    try { foo(x, y); } catch (e) {}
    if (i37 >= 150) {
    }
}
x = { f: 42 };
y = { f: 43 };
ok = null;
expected = 42;
for (let i60 = 0; i60 < 200; i60++) {
    if (i60 == 150) {
        function f68() {
            ok = i60;
            return 37;
        }
        const v70 = { valueOf: f68 };
        y = { f: v70 };
        expected = 37;
    }
    try { bar(x, y); } catch (e) {}
    if (i60 >= 150) {
    }
}
