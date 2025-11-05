try {
    function f0() {
    }
    var desc = Object.getOwnPropertyDescriptor(Function.prototype, "length");
    const v11 = { value: 0, writable: false, enumerable: false, configurable: true };
    Function.prototype.prototype;
    Function.prototype.callee;
    const v18 = () => {
        return Function.prototype?.caller;
    };
    v18();
    const v23 = () => {
        return Function.prototype?.arguments;
    };
    v23();
    if (typeof f0 === "function") {
        f0(true, true);
    }
} catch(e33) {
}
