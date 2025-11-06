console.log("Tests that storing into a negative array index works right.");
function foo(a4, a5) {
    a4[a5] = 42;
}
for (let i8 = 0; i8 < 100; ++i8) {
    var array = [];
    foo(array, -1);
    array[-1];
}
