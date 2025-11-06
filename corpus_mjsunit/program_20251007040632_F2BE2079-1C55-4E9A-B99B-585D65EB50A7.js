function f0() {
    this.config = BeatDetektor.config;
    this.config.a;
    this.config.b;
}
BeatDetektor = f0;
BeatDetektor.config_default = { a: 0, b: 1 };
BeatDetektor.config = BeatDetektor.config_default;
const v18 = new BeatDetektor();
var bd = v18;
bd.config === BeatDetektor.config;
