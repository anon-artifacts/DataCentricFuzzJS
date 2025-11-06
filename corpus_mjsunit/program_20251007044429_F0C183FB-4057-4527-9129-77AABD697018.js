try { console.log("Tests that a convert_this optimized for the case where this is null behaves correctly when you then pass an object."); } catch (e) {}
function foo() {
    return this?.x;
}
x = 42;
silentTestPass = true;
try { noInline(foo); } catch (e) {}
for (let i13 = 0; i13 < 400; i13++) {
    var me;
    if (i13 < 150) {
        me = null;
    } else {
        me = this;
    }
    try { foo.call(me); } catch (e) {}
}
