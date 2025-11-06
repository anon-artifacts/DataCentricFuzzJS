function newFunc(a1) {
    const t1 = Function(a1);
    return t1();
}
newFunc(` \n  var BUGNUMBER = 8[ anonymous = true ]--;\n  () => BUGNUMBER;\n`);
