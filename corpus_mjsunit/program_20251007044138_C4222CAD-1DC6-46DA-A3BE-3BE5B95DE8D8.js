function f0(a1) {
    Error.prepareStackTrace = Error;
    return Error().stack;
}
const v5 = {};
v5.__defineGetter__("p", f0);
v5.p;
