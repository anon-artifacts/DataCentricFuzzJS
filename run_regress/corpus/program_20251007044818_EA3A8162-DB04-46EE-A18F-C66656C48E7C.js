function f0(a1, a2) {
    return a2;
}
Error.prepareStackTrace = f0;
Error().stack[0].getFileName();
