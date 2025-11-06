const v1 = () => {
    throw 42;
};
TypeError.prototype.__defineGetter__("name", v1);
try {
    const v6 = () => {
        const v7 = new TypeError();
        throw v7;
    };
    console.log({ toString: v6 });
} catch(e11) {
}
try {
    const v13 = WebAssembly.Table;
    new v13({});
} catch(e16) {
}
