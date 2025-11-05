console.log("Tests effect of mutating Arguments object's structure.");
function foo() {
    arguments.a = true;
    return arguments.a;
}
for (let i9 = 0; i9 < 200; i9++) {
    foo();
}
foo();
