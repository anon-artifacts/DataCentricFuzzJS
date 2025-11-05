try {
    const v1 = new Error();
    var e = v1;
    e.name = e;
    "" + e;
} catch(e5) {
    e5.message;
}
