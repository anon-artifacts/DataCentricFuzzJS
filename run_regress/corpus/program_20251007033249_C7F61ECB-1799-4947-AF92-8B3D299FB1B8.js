function test() {
    function InnerClass() {
    }
    const v2 = new InnerClass();
    var container = { field: v2 };
    return Object.freeze(container);
}
Object.isFrozen(test());
Object.isFrozen(test());
