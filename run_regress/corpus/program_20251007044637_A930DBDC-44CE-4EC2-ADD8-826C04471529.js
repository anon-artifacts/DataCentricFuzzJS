const v0 = (a1, a2) => {
    return a2;
};
Error.prepareStackTrace = v0;
var CallSiteConstructor = Error().stack[0].constructor;
try {
    const v10 = new CallSiteConstructor(CallSiteConstructor, 6);
    v10.toString();
} catch(e12) {
}
