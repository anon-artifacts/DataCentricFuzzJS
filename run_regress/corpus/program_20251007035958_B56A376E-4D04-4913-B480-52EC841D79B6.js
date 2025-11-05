function assert(a1) {
}
function tryChangeNonConfigurableDescriptor(a3) {
    Object.defineProperty(arguments, 0, { configurable: false });
    try {
        Object.defineProperty(arguments, 0, a3);
    } catch(e13) {
    }
}
const v14 = () => {
    return 50;
};
tryChangeNonConfigurableDescriptor({ get: v14 });
const v18 = (a19) => {
};
tryChangeNonConfigurableDescriptor({ set: v18 });
tryChangeNonConfigurableDescriptor({ writable: true, enumerable: false });
function tryChangeWritableOfNonConfigurableDescriptor(a27) {
    Object.defineProperty(arguments, 0, { configurable: false });
    Object.defineProperty(arguments, 0, { writable: true });
    Object.defineProperty(arguments, 0, { writable: false });
}
tryChangeWritableOfNonConfigurableDescriptor("foo");
