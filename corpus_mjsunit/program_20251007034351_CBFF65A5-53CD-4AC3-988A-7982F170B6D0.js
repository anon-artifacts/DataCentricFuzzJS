var PI = 3.141592653589793;
var SOLAR_MASS = (4 * PI) * PI;
var DAYS_PER_YEAR = 365.24;
function Body(a9, a10, a11, a12, a13, a14, a15) {
    this.x = a9;
    this.y = a10;
    this.z = a11;
    this.vx = a12;
    this.vy = a13;
    this.vz = a14;
    this.mass = a15;
}
function f23(a24, a25, a26) {
    this.vx = -a24 / SOLAR_MASS;
    this.vy = -a25 / SOLAR_MASS;
    this.vz = -a26 / SOLAR_MASS;
    return this;
}
const t18 = Body.prototype;
t18.offsetMomentum = f23;
function Jupiter() {
    const v53 = new Body(4.841431442464721, -1.1603200440274284, -0.10362204447112311, 0.001660076642744037 * DAYS_PER_YEAR, 0.007699011184197404 * DAYS_PER_YEAR, -6.90460016972063e-05 * DAYS_PER_YEAR, 0.0009547919384243266 * SOLAR_MASS);
    return v53;
}
function Saturn() {
    const v68 = new Body(8.34336671824458, 4.124798564124305, -0.4035234171143214, -0.002767425107268624 * DAYS_PER_YEAR, 0.004998528012349172 * DAYS_PER_YEAR, 2.3041729757376393e-05 * DAYS_PER_YEAR, 0.0002858859806661308 * SOLAR_MASS);
    return v68;
}
function Uranus() {
    const v84 = new Body(12.894369562139131, -15.111151401698631, -0.22330757889265573, 0.002964601375647616 * DAYS_PER_YEAR, 0.0023784717395948095 * DAYS_PER_YEAR, -2.9658956854023756e-05 * DAYS_PER_YEAR, 4.366244043351563e-05 * SOLAR_MASS);
    return v84;
}
function Neptune() {
    const v99 = new Body(15.379697114850917, -25.919314609987964, 0.17925877295037118, 0.0026806777249038932 * DAYS_PER_YEAR, 0.001628241700382423 * DAYS_PER_YEAR, -9.515922545197159e-05 * DAYS_PER_YEAR, 5.1513890204661145e-05 * SOLAR_MASS);
    return v99;
}
function Sun() {
    const v107 = new Body(0, 0, 0, 0, 0, 0, SOLAR_MASS);
    return v107;
}
function NBodySystem(a109) {
    this.bodies = a109;
    var px = 0;
    var py = 0;
    var pz = 0;
    var size = this.bodies.length;
    for (let i122 = 0; i122 < size; i122++) {
        var b = this.bodies[i122];
        var m = b.mass;
        px += b.vx * m;
        py += b.vy * m;
        pz += b.vz * m;
    }
    this.bodies[0].offsetMomentum(px, py, pz);
}
function f143(a144) {
    var dx;
    var dy;
    var dz;
    var distance;
    var mag;
    var size = this.bodies.length;
    for (let i160 = 0; i160 < size; i160++) {
        var bodyi = this.bodies[i160];
        for (let i171 = i160 + 1; i171 < size; i171++) {
            var bodyj = this.bodies[i171];
            dx = bodyi.x - bodyj.x;
            dy = bodyi.y - bodyj.y;
            dz = bodyi.z - bodyj.z;
            mag = a144 / (((distance = Math.sqrt(((dx * dx) + (dy * dy)) + (dz * dz))) * distance) * distance);
            bodyi.vx -= (dx * bodyj.mass) * mag;
            bodyi.vy -= (dy * bodyj.mass) * mag;
            bodyi.vz -= (dz * bodyj.mass) * mag;
            bodyj.vx += (dx * bodyi.mass) * mag;
            bodyj.vy += (dy * bodyi.mass) * mag;
            bodyj.vz += (dz * bodyi.mass) * mag;
        }
    }
    for (let i218 = 0; i218 < size; i218++) {
        var body = this.bodies[i218];
        body.x += a144 * body.vx;
        body.y += a144 * body.vy;
        body.z += a144 * body.vz;
    }
}
const t85 = NBodySystem.prototype;
t85.advance = f143;
function f234() {
    var dx;
    var dy;
    var dz;
    var distance;
    var e = 0;
    var size = this.bodies.length;
    for (let i250 = 0; i250 < size; i250++) {
        var bodyi = this.bodies[i250];
        e += (0.5 * bodyi.mass) * (((bodyi.vx * bodyi.vx) + (bodyi.vy * bodyi.vy)) + (bodyi.vz * bodyi.vz));
        for (let i276 = i250 + 1; i276 < size; i276++) {
            var bodyj = this.bodies[i276];
            dx = bodyi.x - bodyj.x;
            dy = bodyi.y - bodyj.y;
            dz = bodyi.z - bodyj.z;
            distance = Math.sqrt(((dx * dx) + (dy * dy)) + (dz * dz));
            e -= (bodyi.mass * bodyj.mass) / distance;
        }
    }
    return e;
}
const t108 = NBodySystem.prototype;
t108.energy = f234;
var ret;
for (let i309 = 3; i309 <= 24; i309 *= 2) {
    function f315() {
        const v323 = new NBodySystem(Array(Sun(), Jupiter(), Saturn(), Uranus(), Neptune()));
        var bodies = v323;
        var max = i309 * 100;
        ret = bodies.energy();
        for (let i330 = 0; i330 < max; i330++) {
            bodies.advance(0.01);
        }
        ret = bodies.energy();
    }
    f315();
}
-0.16906933525822856;
