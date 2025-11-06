function test(a1) {
    function nest() {
        {
            function foo() {
                console.log("pass");
            }
        }
        a1();
    }
    nest();
}
const v9 = () => {
    return console.log("fail");
};
test(v9);
