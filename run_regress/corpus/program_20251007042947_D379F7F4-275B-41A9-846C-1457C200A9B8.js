function r(a1) {
    if (!(this instanceof r)) {
        const v5 = new r(a1);
        return v5;
    }
}
function foo() {
}
r(foo);
r(foo);
r(foo);
console.log("Passed");
