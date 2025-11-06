function fieldhoist1() {
    var object = {};
    var sum = 0;
    for (let i6 = 0; i6 < 3; i6++) {
        sum += object.sum;
        function f14() {
            print("sum");
        }
        Object.defineProperty(object, "sum", { get: f14, configurable: true });
        sum += object.sum;
    }
}
function fieldhoist2() {
    var object = {};
    var sum = 0;
    for (let i29 = 0; i29 < 3; i29++) {
        sum += object.sum;
        function f37() {
            print("x");
        }
        Object.defineProperty(object, "x", { get: f37, configurable: true });
        sum += object.sum;
    }
}
function fieldhoist3(a47) {
    var object = { sum: 1 };
    function f51(a52) {
        print(a52);
    }
    Object.defineProperty(object, a47, { set: f51, configurable: true });
    var sum = 0;
    for (let i62 = 0; i62 < 3; i62++) {
        sum += object.sum;
        object[a47] = object.sum;
        sum += object.sum;
    }
}
function main() {
    fieldhoist1();
    fieldhoist2();
    fieldhoist3("x");
}
main();
