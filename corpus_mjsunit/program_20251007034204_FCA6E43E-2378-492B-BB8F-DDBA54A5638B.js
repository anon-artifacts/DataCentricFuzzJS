if (typeof newGlobal === "function") {
    var otherGlobal = newGlobal();
    function taintLengthProperty(a7) {
        const v12 = {
            get() {
            },
        };
        Object.defineProperty(a7, "length", v12);
    }
    for (const v16 of anyTypedArrayConstructors) {
        const v18 = new v16(4);
        var target = v18;
        const t12 = otherGlobal[v16.name];
        const v25 = new t12([10,20]);
        var source = v25;
        taintLengthProperty(source);
        [0,0,0,0];
        target.set(source, 1);
        [0,10,20,0];
    }
    if (typeof detachArrayBuffer === "function") {
        for (const v45 of typedArrayConstructors) {
            const v47 = new v45(4);
            var target = v47;
            const t24 = otherGlobal[v45.name];
            const v52 = new t24(1);
            var source = v52;
            taintLengthProperty(source);
            otherGlobal.detachArrayBuffer(source.buffer);
            const v57 = () => {
                return target.set(source);
            };
            v57();
            const t32 = otherGlobal[v45.name];
            const v64 = new t32(1);
            var source = v64;
            taintLengthProperty(source);
            const v71 = {
                valueOf() {
                    otherGlobal.detachArrayBuffer(source.buffer);
                    return 0;
                },
            };
            var offset = v71;
            const v73 = () => {
                return target.set(source, offset);
            };
            v73();
        }
        for (const v76 of typedArrayConstructors) {
            const v78 = new v76(4);
            var target = v78;
            const t52 = otherGlobal.ArrayBuffer;
            const v84 = new t52(1 * v76.BYTES_PER_ELEMENT);
            const v85 = new v76(v84);
            var source = v85;
            taintLengthProperty(source);
            otherGlobal.detachArrayBuffer(source.buffer);
            const v90 = () => {
                return target.set(source);
            };
            v90();
            const t61 = otherGlobal.ArrayBuffer;
            const v98 = new t61(1 * v76.BYTES_PER_ELEMENT);
            const v99 = new v76(v98);
            var source = v99;
            taintLengthProperty(source);
            const v106 = {
                valueOf() {
                    otherGlobal.detachArrayBuffer(source.buffer);
                    return 0;
                },
            };
            var offset = v106;
            const v108 = () => {
                return target.set(source, offset);
            };
            v108();
        }
    }
}
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
