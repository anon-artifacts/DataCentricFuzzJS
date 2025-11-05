function f() {
    try {
        f();
    } catch(e3) {
        const v4 = async () => {
            return await 1;
        };
        v4.length;
    }
}
f();
