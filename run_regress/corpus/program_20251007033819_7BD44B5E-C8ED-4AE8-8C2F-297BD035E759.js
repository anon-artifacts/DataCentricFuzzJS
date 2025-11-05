function f() {
}
var src = ("f(" + ("0,").repeat(8223)) + ")";
const v10 = new Function(src);
var boom = v10;
boom();
