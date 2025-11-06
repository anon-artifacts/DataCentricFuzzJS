function shouldBe(a1, a2) {
}
{
    const v7 = {
        valueOf() {
            const v6 = new Error("NG");
            throw v6;
        },
    };
    let value = v7;
    let error = null;
    try {
        2 ** value;
    } catch(e13) {
        error = e13;
    }
    shouldBe(error.stack.split("\n").length, 2);
}
{
    const v24 = {
        valueOf() {
            const v23 = new Error("NG");
            throw v23;
        },
    };
    let value = v24;
    let error = null;
    try {
        value ** 2;
    } catch(e30) {
        error = e30;
    }
    shouldBe(error.stack.split("\n").length, 2);
}
{
    const v41 = {
        valueOf() {
            const v40 = new Error("NG");
            throw v40;
        },
    };
    let value = v41;
    let error = null;
    try {
        Math.pow(value, 2);
    } catch(e48) {
        error = e48;
    }
    shouldBe(error.stack.split("\n").length, 3);
}
{
    const v59 = {
        valueOf() {
            const v58 = new Error("NG");
            throw v58;
        },
    };
    let value = v59;
    let error = null;
    try {
        Math.pow(2, value);
    } catch(e66) {
        error = e66;
    }
    shouldBe(error.stack.split("\n").length, 3);
}
