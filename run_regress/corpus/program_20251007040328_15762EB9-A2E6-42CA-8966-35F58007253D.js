try {
    var src = ("return " + Array(12000).join("src,")) + "src";
    var fun = Function(src);
    fun();
} catch(e14) {
}
