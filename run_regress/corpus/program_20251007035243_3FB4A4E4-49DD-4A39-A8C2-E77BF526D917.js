function f0(a1, a2, a3) {
    if (a1 !== a2) {
        throw ((((a3 + ". Expected '") + a2) + "', but was '") + a1) + "'";
    }
}
var testCase = f0;
function run(a15) {
    var result = true;
    for (let i19 = 0; i19 < a15; i19++) {
        function f24(a25) {
            this.name = a25;
            const v27 = () => {
                return this.name;
            };
            this.getName = v27;
        }
        var Obj = f24;
        const v34 = new Obj("Item" + i19);
        var obj = v34;
        if (obj.name !== obj.getName()) {
            result = false;
        }
    }
    return result;
}
testCase(run(1), true, "Error: Error: during execution of arrow function one time");
testCase(run(10), true, "Error: Error: during execution of arrow function 10 times");
