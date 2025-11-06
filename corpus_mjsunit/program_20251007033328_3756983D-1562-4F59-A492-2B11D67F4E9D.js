function assert(a1, a2) {
}
next = ([]).values().next;
try {
    next.call(null);
} catch(e10) {
}
try {
    next.call(undefined);
} catch(e15) {
}
