function test1() {
    var i = 0;
    const v4 = [];
    const v14 = {
        get(a6, a7, a8) {
            if (a7 === "length") {
                return ++i;
            }
            return Reflect.get(a6, a7, a8);
        },
    };
    const v15 = new Proxy(v4, v14);
    var ret = JSON.stringify(v15);
    console.log(ret);
    console.log(i);
}
test1();
function test2() {
    try {
        const v24 = () => {
            const v26 = [];
            const v40 = {
                get(a28, a29, a30) {
                    if (a29 === "length") {
                        return (2 ** 31) + 1;
                    }
                    return Reflect.get(a28, a29, a30);
                },
            };
            const v41 = new Proxy(v26, v40);
            return JSON.stringify(v41);
        };
    } catch(e44) {
    }
}
test2();
