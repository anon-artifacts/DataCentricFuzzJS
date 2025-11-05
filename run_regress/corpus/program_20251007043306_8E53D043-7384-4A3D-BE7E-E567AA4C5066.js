var gdpRatio = 16 / 9;
function Foo(a5, a6, a7, a8) {
    this.ORIGIN = { x: a5, y: a6 };
    this.scale = a7;
    this.mapHeight = a8;
}
function f13(a14, a15, a16, a17) {
    var tileHeight = (64 * 0.25) * this.scale;
    var tileWidth = (128 * 0.25) * this.scale;
    var xOffset = (a16 * 0.5) || 0;
    var yOffset = (a17 * 0.5) || 0;
    var xPos = (((xOffset * gdpRatio) + (this.ORIGIN.x * this.scale)) - ((a15 * tileWidth) * gdpRatio)) + ((a14 * tileWidth) * gdpRatio);
    var yPos = (((yOffset * gdpRatio) + (this.ORIGIN.y * this.scale)) + ((a15 * tileHeight) * gdpRatio)) + ((a14 * tileHeight) * gdpRatio);
    const v82 = Math.floor(xPos = (xPos - Math.round(tileWidth * gdpRatio)) + (this.mapHeight * Math.round(tileWidth * gdpRatio)));
    const v83 = Math.floor(yPos);
    return { x: v82, y: v83 };
}
const t17 = Foo.prototype;
t17.bar = f13;
const v90 = new Foo(10, 20, 2.5, 400);
var f = v90;
function baz() {
    var b = f.bar(1.1, 2.2, 3.3, 4.4);
    b.x;
    b.y;
}
baz();
baz();
baz();
