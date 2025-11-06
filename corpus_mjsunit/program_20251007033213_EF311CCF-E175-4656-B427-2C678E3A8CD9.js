function checkConstruct(a1, a2) {
    try {
        new a1();
    } catch(e4) {
    }
}
var boundFunctionPrototype = Function.prototype.bind();
checkConstruct(boundFunctionPrototype, true);
var boundBuiltin = Math.sin.bind();
checkConstruct(boundBuiltin, true);
