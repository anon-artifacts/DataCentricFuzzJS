function init() {
    const v1 = () => {
        return 1;
    };
    foo = v1;
    const v4 = () => {
        return 2;
    };
    bar = v4;
    function f7() {
    }
    foo.__proto__ = f7;
}
function test() {
    var arr = [foo,bar];
    for (let i15 = 0; i15 < 1300; i15++) {
        arr[i15 % 2]();
        (i15 % 2) + 1;
    }
}
init();
test();
