if (typeof detachArrayBuffer === "function") {
    const originalNumberToLocaleString = Number.prototype.toLocaleString;
    for (const v9 of typedArrayConstructors) {
        const v11 = new v9(42);
        let typedArray = v11;
        detachArrayBuffer(typedArray.buffer);
        const v15 = () => {
            return typedArray.toLocaleString();
        };
        v15();
    }
    for (const v19 of typedArrayConstructors) {
        function f20() {
            'use strict';
            if (!detached) {
                detachArrayBuffer(typedArray.buffer);
                detached = true;
            }
            return this;
        }
        const t20 = Number.prototype;
        t20.toLocaleString = f20;
        let detached = false;
        const v32 = new v19(1);
        let typedArray = v32;
        typedArray.toLocaleString();
        detached = false;
        const v39 = new v19(2);
        typedArray = v39;
        const v40 = () => {
            return typedArray.toLocaleString();
        };
        v40();
    }
    const t34 = Number.prototype;
    t34.toLocaleString = originalNumberToLocaleString;
}
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
