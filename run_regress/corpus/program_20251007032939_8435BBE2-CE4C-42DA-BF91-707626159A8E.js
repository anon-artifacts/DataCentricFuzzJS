try { console.log("Tests correctness of method calls when the prototype is changed."); } catch (e) {}
function Thingy() {
}
function f4() {
    return 42;
}
Thingy.prototype = { foo: f4 };
function callFoo(a8) {
    let v9;
    try { v9 = a8.foo(); } catch (e) {}
    return v9;
}
let v10;
try { v10 = new Thingy(); } catch (e) {}
var o = v10;
silentTestPass = true;
try { noInline(callFoo); } catch (e) {}
for (let i17 = 0; i17 < 200; i17++) {
    if (i17 == 150) {
        function f25() {
            return 56;
        }
        const t22 = Thingy?.prototype;
        t22.foo = f25;
    }
    var expected;
    if (i17 < 150) {
        expected = 42;
    } else {
        expected = 56;
    }
    try { callFoo(o); } catch (e) {}
}
