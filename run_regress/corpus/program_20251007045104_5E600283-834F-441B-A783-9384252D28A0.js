function foo(a1) {
    return Symbol.iterator == a1;
}
function main() {
    foo(Symbol());
    const v11 = {
        valueOf() {
            return Symbol.toPrimitive;
        },
    };
    foo(v11);
}
main();
main();
foo();
