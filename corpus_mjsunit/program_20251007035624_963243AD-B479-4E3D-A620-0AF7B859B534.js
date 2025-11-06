var caught = false;
try {
    const v2 = {};
    Function.prototype.call.call(v2);
} catch(e8) {
    caught = true;
    e8 instanceof TypeError;
}
