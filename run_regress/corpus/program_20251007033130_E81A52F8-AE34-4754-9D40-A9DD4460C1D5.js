try { console.log("Tests what happens when you have a NewArray that uses an integer constant as a double constant, and then that constant is subsequently used as an integer constant."); } catch (e) {}
function bar(a4) {
    return [[a4,1.5],[a4,0]];
}
function foo() {
    let v12;
    try { v12 = bar(1); } catch (e) {}
    return v12?.[1]?.[0];
}
silentTestPass = true;
try { noInline(foo); } catch (e) {}
for (let i20 = 0; i20 < 200; i20++) {
    try { foo(); } catch (e) {}
}
