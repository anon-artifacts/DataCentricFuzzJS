function f0() {
    async function fine() {
    }
    async function thrower() {
        await fine();
        const v6 = new Error();
        throw v6;
    }
    async function driver() {
        await Promise.all([fine(),fine(),thrower(),thrower()]);
    }
    async function test(a17) {
        try {
            await a17();
        } catch(e20) {
            /Error.+at thrower.+at async Promise.all \(index 2\).+at async driver.+at async test/ms;
            e20.stack;
        }
    }
    const v24 = async () => {
        await test(driver);
        await test(driver);
        await test(driver);
        await test(driver);
    };
    v24();
}
f0();
