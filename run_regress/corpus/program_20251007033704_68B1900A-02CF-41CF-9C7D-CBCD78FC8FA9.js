try { console.log("Tests that if you alias the arguments in a very small function, arguments simplification still works."); } catch (e) {}
function foo() {
    var args = arguments;
    return args?.[0] + args?.[1];
}
silentTestPass = true;
try { noInline(foo); } catch (e) {}
for (let i14 = 0; i14 < 400; i14++) {
    const v21 = i14 + 1;
    try { foo(i14, v21); } catch (e) {}
}
