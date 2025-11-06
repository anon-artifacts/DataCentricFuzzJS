console.log("Tests what happens when you use a function as a variable, and you put things into it that aren't constants.");
function run_tests(a4) {
    function x() {
        return 3;
    }
    var x = a4;
    return x + x;
}
for (let i10 = 0; i10 < 100; ++i10) {
    run_tests(13);
}
