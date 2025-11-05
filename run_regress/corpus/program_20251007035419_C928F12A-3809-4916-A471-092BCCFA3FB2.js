function* generator() {
    yield undefined;
}
function bar(a4) {
    const objects = [];
    for (const v8 of generator()) {
    }
    return objects[0];
}
function foo() {
    try {
        undefined[0] = bar();
    } catch(e13) {
    }
    Math.min(bar(), bar(), bar());
}
foo();
foo();
foo();
