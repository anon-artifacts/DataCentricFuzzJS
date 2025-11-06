try { console.log("Tests that a convert_this optimized for the case where this is an object with polymorphic structure behaves correctly when you then pass null."); } catch (e) {}
function foo() {
    return this?.x;
}
x = 42;
silentTestPass = true;
try { noInline(foo); } catch (e) {}
for (let i13 = 0; i13 < 1000; i13++) {
    var me;
    if (i13 < 150) {
        me = this;
    } else {
        if (i13 < 950) {
            me = { x: 42, y: 62 };
        } else {
            me = null;
        }
    }
    try { foo.call(me); } catch (e) {}
}
