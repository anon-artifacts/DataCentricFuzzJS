function C() {
    this.y = "foo";
    let v4 = this["foo"];
    this.x = v4--;
}
new C();
