function foo() {
    const v2 = new Array();
    var result = v2;
    var out;
    {
        let sum = 0;
        for (let i9 = 0; i9 < 10; i9++) {
            {
                let x = i9;
                sum += i9;
                function f16() {
                    return x;
                }
                result.push(f16);
            }
        }
        out = sum;
    }
    result.push(out);
    return result;
}
function check() {
    var r = foo();
    r.pop();
    for (let i25 = 9; i25 >= 0; i25--) {
        const t25 = r.pop();
        t25();
    }
    r.length;
}
check();
check();
check();
