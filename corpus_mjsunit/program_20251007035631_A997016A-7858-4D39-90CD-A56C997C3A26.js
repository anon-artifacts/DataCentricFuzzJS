function Fuu() {
    this.x = this.x.x;
}
const v6 = { x: 1 };
const t4 = Fuu.prototype;
t4.x = v6;
new Fuu();
new Fuu();
new Fuu();
