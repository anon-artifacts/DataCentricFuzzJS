function foo() {
    return Array.isArray(1);
}
let failed = foo();
failed |= foo();
failed |= foo();
failed ? console.log("Fail") : console.log("Pass");
