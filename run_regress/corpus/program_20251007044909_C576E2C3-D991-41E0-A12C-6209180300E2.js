function shouldBe(a1, a2) {
}
var executorFunction;
function NotPromise(a6) {
    executorFunction = a6;
    function f7() {
    }
    function f8() {
    }
    a6(f7, f8);
}
Promise.resolve.call(NotPromise);
shouldBe(JSON.stringify(Object.getOwnPropertyNames(executorFunction).sort()), `["length"]`);
shouldBe(executorFunction.hasOwnProperty("name"), false);
shouldBe(executorFunction.name, ``);
shouldBe(delete executorFunction.name, true);
