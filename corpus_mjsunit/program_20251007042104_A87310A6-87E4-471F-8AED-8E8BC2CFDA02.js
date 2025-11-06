function explode() {
    var array = [1,2,3];
    function f7() {
        throw "dynamite";
    }
    Object.defineProperty(array, 4, { get: f7 });
    JSON.stringify(array);
}
try {
    explode();
} catch(e15) {
}
