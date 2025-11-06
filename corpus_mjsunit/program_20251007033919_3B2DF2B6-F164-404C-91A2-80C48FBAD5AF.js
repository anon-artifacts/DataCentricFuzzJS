function Employee(a1, a2) {
    const v4 = a1 || "";
    this.name = v4;
    return v4;
}
function WorkerBee(a7, a8, a9) {
    this.base = Employee;
    this.base(a7, a8);
}
function Engineer(a14, a15, a16) {
    this.base = WorkerBee;
    this.base(a14, "engineering", a15);
    __proto__["a" + constructor] = 1;
}
new Engineer();
