try { console.log("Tests that the CompareEq optimization for the case where one side is predicted final object and the other side is predicted either final object or other (i.e. null or undefined) doesn't assert when both sides are also proven final object."); } catch (e) {}
function foo(a4, a5) {
    return [a4?.f,a5?.f,a4 == a5];
}
silentTestPass = true;
try { noInline(foo); } catch (e) {}
for (let i15 = 0; i15 < 200; i15++) {
    if (i15 % 2) {
        var o = { f: 42 };
        try { foo(o, o); } catch (e) {}
    } else {
        try {
            const v28 = { f: 42 };
            try { foo(v28, null); } catch (e) {}
        } catch(e31) {
        }
    }
}
