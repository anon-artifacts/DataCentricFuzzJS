console.log("Regression test for https://webkit.org/b/148411. This test should not crash.");
function foo() {
    [5,6,7,8];
    [100,101,102,103,104,105,106,107,108,109,110,111,112,113,114];
}
for (let i26 = 0; i26 < 100000; ++i26) {
    foo();
}
