try { console.log("Tests that the CompareEq optimization for the case where one side is predicted final object and the other side is predicted either final object or other (i.e. null or undefined) doesn't assert when the other side is also proven final object."); } catch (e) {}
function foo(a4, a5) {
    return [a5?.f,a4 == a5];
}
silentTestPass = true;
try { noInline(foo); } catch (e) {}
for (let i14 = 0; i14 < 100; i14++) {
    if (i14 % 2) {
        var o = { f: 42 };
        try { foo(o, o); } catch (e) {}
    } else {
        try {
            const v27 = { f: 42 };
            try { foo(v27, null); } catch (e) {}
        } catch(e30) {
        }
    }
}
