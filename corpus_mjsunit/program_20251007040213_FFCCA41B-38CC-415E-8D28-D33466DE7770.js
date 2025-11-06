function alert(a1) {
    print(a1);
}
function f6(a7) {
    function Inheriter() {
    }
    Inheriter.prototype = a7.prototype;
    const v10 = new Inheriter();
    this.prototype = v10;
    this.superConstructor = a7;
}
const t11 = Object.prototype;
t11.inheritsFrom = f6;
function OrderedCollection() {
    const v17 = new Array();
    this.elms = v17;
}
function f19(a20) {
    this.elms.push(a20);
}
const t20 = OrderedCollection.prototype;
t20.add = f19;
function f25(a26) {
    return this.elms[a26];
}
const t25 = OrderedCollection.prototype;
t25.at = f25;
function f31() {
    return this.elms.length;
}
const t30 = OrderedCollection.prototype;
t30.size = f31;
function f36() {
    return this.elms.pop();
}
const t35 = OrderedCollection.prototype;
t35.removeFirst = f36;
function f41(a42) {
    var index = 0;
    var skipped = 0;
    for (let i48 = 0; i48 < this.elms.length; i48++) {
        var value = this.elms[i48];
        if (value != a42) {
            const t43 = this.elms;
            t43[index] = value;
            index++;
        } else {
            skipped++;
        }
    }
    for (let i66 = 0; i66 < skipped; i66++) {
        this.elms.pop();
    }
}
const t54 = OrderedCollection.prototype;
t54.remove = f41;
function Strength(a76, a77) {
    this.strengthValue = a76;
    this.name = a77;
}
function f80(a81, a82) {
    return a81.strengthValue < a82.strengthValue;
}
Strength.stronger = f80;
function f86(a87, a88) {
    return a87.strengthValue > a88.strengthValue;
}
Strength.weaker = f86;
function f92(a93, a94) {
    return this.weaker(a93, a94) ? a93 : a94;
}
Strength.weakestOf = f92;
function f98(a99, a100) {
    return this.stronger(a99, a100) ? a99 : a100;
}
Strength.strongest = f98;
function f104() {
    switch (this.strengthValue) {
        case 0:
            return Strength.WEAKEST;
        case 1:
            return Strength.WEAK_DEFAULT;
        case 2:
            return Strength.NORMAL;
        case 3:
            return Strength.STRONG_DEFAULT;
        case 4:
            return Strength.PREFERRED;
        case 5:
            return Strength.REQUIRED;
    }
}
const t92 = Strength.prototype;
t92.nextWeaker = f104;
const v122 = new Strength(0, "required");
Strength.REQUIRED = v122;
const v125 = new Strength(1, "strongPreferred");
Strength.STONG_PREFERRED = v125;
const v128 = new Strength(2, "preferred");
Strength.PREFERRED = v128;
const v131 = new Strength(3, "strongDefault");
Strength.STRONG_DEFAULT = v131;
const v134 = new Strength(4, "normal");
Strength.NORMAL = v134;
const v137 = new Strength(5, "weakDefault");
Strength.WEAK_DEFAULT = v137;
const v140 = new Strength(6, "weakest");
Strength.WEAKEST = v140;
function Constraint(a142) {
    this.strength = a142;
}
function f144() {
    this.addToGraph();
    planner.incrementalAdd(this);
}
const t115 = Constraint.prototype;
t115.addConstraint = f144;
function f151(a152) {
    this.chooseMethod(a152);
    if (!this.isSatisfied()) {
        if (this.strength == Strength.REQUIRED) {
            alert("Could not satisfy a required constraint!");
        }
        return null;
    }
    this.markInputs(a152);
    var out = this.output();
    var overridden = out.determinedBy;
    if (overridden != null) {
        overridden.markUnsatisfied();
    }
    out.determinedBy = this;
    if (!planner.addPropagate(this, a152)) {
        alert("Cycle encountered");
    }
    out.mark = a152;
    return overridden;
}
const t138 = Constraint.prototype;
t138.satisfy = f151;
function f183() {
    if (this.isSatisfied()) {
        planner.incrementalRemove(this);
    } else {
        this.removeFromGraph();
    }
}
const t147 = Constraint.prototype;
t147.destroyConstraint = f183;
function f192() {
    return false;
}
const t152 = Constraint.prototype;
t152.isInput = f192;
function UnaryConstraint(a196, a197) {
    UnaryConstraint.superConstructor.call(this, a197);
    this.myOutput = a196;
    this.satisfied = false;
    this.addConstraint();
}
UnaryConstraint.inheritsFrom(Constraint);
function f207() {
    this.myOutput.addConstraint(this);
    this.satisfied = false;
}
const t165 = UnaryConstraint.prototype;
t165.addToGraph = f207;
function f215(a216) {
    this.satisfied = (this.myOutput.mark != a216) && Strength.stronger(this.strength, this.myOutput.walkStrength);
}
const t170 = UnaryConstraint.prototype;
t170.chooseMethod = f215;
function f230() {
    return this.satisfied;
}
const t175 = UnaryConstraint.prototype;
t175.isSatisfied = f230;
function f234(a235) {
}
const t179 = UnaryConstraint.prototype;
t179.markInputs = f234;
function f237() {
    return this.myOutput;
}
const t184 = UnaryConstraint.prototype;
t184.output = f237;
function f241() {
    const v243 = this.strength;
    const t188 = this.myOutput;
    t188.walkStrength = v243;
    const v248 = !this.isInput();
    const t191 = this.myOutput;
    t191.stay = v248;
    if (this.myOutput.stay) {
        this.execute();
    }
}
const t197 = UnaryConstraint.prototype;
t197.recalculate = f241;
function f257() {
    this.satisfied = false;
}
const t202 = UnaryConstraint.prototype;
t202.markUnsatisfied = f257;
function f261() {
    return true;
}
const t207 = UnaryConstraint.prototype;
t207.inputsKnown = f261;
function f264() {
    if (this.myOutput != null) {
        this.myOutput.removeConstraint(this);
    }
    this.satisfied = false;
}
const t215 = UnaryConstraint.prototype;
t215.removeFromGraph = f264;
function StayConstraint(a277, a278) {
    StayConstraint.superConstructor.call(this, a277, a278);
}
StayConstraint.inheritsFrom(UnaryConstraint);
function f283() {
}
const t223 = StayConstraint.prototype;
t223.execute = f283;
function EditConstraint(a286, a287) {
    EditConstraint.superConstructor.call(this, a286, a287);
}
EditConstraint.inheritsFrom(UnaryConstraint);
function f292() {
    return true;
}
const t232 = EditConstraint.prototype;
t232.isInput = f292;
function f295() {
}
const t236 = EditConstraint.prototype;
t236.execute = f295;
const v297 = new Object();
var Direction = v297;
Direction.NONE = 0;
Direction.FORWARD = 1;
Direction.BACKWARD = -1;
function BinaryConstraint(a304, a305, a306) {
    BinaryConstraint.superConstructor.call(this, a306);
    this.v1 = a304;
    this.v2 = a305;
    this.direction = Direction.NONE;
    this.addConstraint();
}
BinaryConstraint.inheritsFrom(Constraint);
function f317(a318) {
    if (this.v1.mark == a318) {
        this.direction = (this.v1.mark != a318) && Strength.stronger(this.strength, this.v2.walkStrength) ? Direction.FORWARD : Direction.NONE;
    }
    if (this.v2.mark == a318) {
        this.direction = (this.v1.mark != a318) && Strength.stronger(this.strength, this.v1.walkStrength) ? Direction.BACKWARD : Direction.NONE;
    }
    if (Strength.weaker(this.v1.walkStrength, this.v2.walkStrength)) {
        this.direction = Strength.stronger(this.strength, this.v1.walkStrength) ? Direction.BACKWARD : Direction.NONE;
    } else {
        this.direction = Strength.stronger(this.strength, this.v2.walkStrength) ? Direction.FORWARD : Direction.BACKWARD;
    }
}
const t264 = BinaryConstraint.prototype;
t264.chooseMethod = f317;
function f385() {
    this.v1.addConstraint(this);
    this.v2.addConstraint(this);
    this.direction = Direction.NONE;
}
const t271 = BinaryConstraint.prototype;
t271.addToGraph = f385;
function f397() {
    return this.direction != Direction.NONE;
}
const t276 = BinaryConstraint.prototype;
t276.isSatisfied = f397;
function f403(a404) {
    const t279 = this.input();
    t279.mark = a404;
}
const t282 = BinaryConstraint.prototype;
t282.markInputs = f403;
function f408() {
    return this.direction == Direction.FORWARD ? this.v1 : this.v2;
}
const t287 = BinaryConstraint.prototype;
t287.input = f408;
function f419() {
    return this.direction == Direction.FORWARD ? this.v2 : this.v1;
}
const t292 = BinaryConstraint.prototype;
t292.output = f419;
function f430() {
    var ihn = this.input();
    var out = this.output();
    out.walkStrength = Strength.weakestOf(this.strength, ihn.walkStrength);
    out.stay = ihn.stay;
    if (out.stay) {
        this.execute();
    }
}
const t303 = BinaryConstraint.prototype;
t303.recalculate = f430;
function f446() {
    this.direction = Direction.NONE;
}
const t308 = BinaryConstraint.prototype;
t308.markUnsatisfied = f446;
function f450(a451) {
    var i = this.input();
    return ((i.mark == a451) || i.stay) || (i.determinedBy == null);
}
const t314 = BinaryConstraint.prototype;
t314.inputsKnown = f450;
function f464() {
    if (this.v1 != null) {
        this.v1.removeConstraint(this);
    }
    if (this.v2 != null) {
        this.v2.removeConstraint(this);
    }
    this.direction = Direction.NONE;
}
const t325 = BinaryConstraint.prototype;
t325.removeFromGraph = f464;
function ScaleConstraint(a485, a486, a487, a488, a489) {
    this.direction = Direction.NONE;
    this.scale = a486;
    this.offset = a487;
    ScaleConstraint.superConstructor.call(this, a485, a488, a489);
}
ScaleConstraint.inheritsFrom(BinaryConstraint);
function f498() {
    ScaleConstraint.superConstructor.prototype.addToGraph.call(this);
    this.scale.addConstraint(this);
    this.offset.addConstraint(this);
}
const t339 = ScaleConstraint.prototype;
t339.addToGraph = f498;
function f513() {
    ScaleConstraint.superConstructor.prototype.removeFromGraph.call(this);
    if (this.scale != null) {
        this.scale.removeConstraint(this);
    }
    if (this.offset != null) {
        this.offset.removeConstraint(this);
    }
}
const t350 = ScaleConstraint.prototype;
t350.removeFromGraph = f513;
function f536(a537) {
    ScaleConstraint.superConstructor.prototype.markInputs.call(this, a537);
    const t353 = this.offset;
    t353.mark = a537;
    const t356 = this.scale;
    t356.mark = a537;
}
const t359 = ScaleConstraint.prototype;
t359.markInputs = f536;
function f548() {
    if (this.direction == Direction.FORWARD) {
        const v563 = (this.v1.value * this.scale.value) + this.offset.value;
        const t364 = this.v2;
        t364.value = v563;
    } else {
        const v576 = (this.v2.value - this.offset.value) / this.scale.value;
        const t368 = this.v1;
        t368.value = v576;
    }
}
const t372 = ScaleConstraint.prototype;
t372.execute = f548;
function f580() {
    var ihn = this.input();
    var out = this.output();
    out.walkStrength = Strength.weakestOf(this.strength, ihn.walkStrength);
    out.stay = (ihn.stay && this.scale.stay) && this.offset.stay;
    if (out.stay) {
        this.execute();
    }
}
const t383 = ScaleConstraint.prototype;
t383.recalculate = f580;
function EqualityConstraint(a605, a606, a607) {
    EqualityConstraint.superConstructor.call(this, a605, a606, a607);
}
EqualityConstraint.inheritsFrom(BinaryConstraint);
function f612() {
    const v615 = this.input().value;
    const t391 = this.output();
    t391.value = v615;
}
const t394 = EqualityConstraint.prototype;
t394.execute = f612;
function Variable(a620, a621) {
    this.value = a621 || 0;
    const v625 = new OrderedCollection();
    this.constraints = v625;
    this.determinedBy = null;
    this.mark = 0;
    this.walkStrength = Strength.WEAKEST;
    this.stay = true;
    this.name = a620;
}
function f636(a637) {
    this.constraints.add(a637);
}
const t409 = Variable.prototype;
t409.addConstraint = f636;
function f642(a643) {
    this.constraints.remove(a643);
    if (this.determinedBy == a643) {
        this.determinedBy = null;
    }
}
const t417 = Variable.prototype;
t417.removeConstraint = f642;
function Planner() {
    this.currentMark = 0;
}
function f656(a657) {
    var mark = this.newMark();
    var overridden = a657.satisfy(mark);
    while (overridden != null) {
        overridden = overridden.satisfy(mark);
    }
}
const t429 = Planner.prototype;
t429.incrementalAdd = f656;
function f667(a668) {
    var out = a668.output();
    a668.markUnsatisfied();
    a668.removeFromGraph();
    var unsatisfied = this.removePropagateFrom(out);
    var strength = Strength.REQUIRED;
    do {
        for (let i679 = 0; i679 < unsatisfied.size(); i679++) {
            var u = unsatisfied.at(i679);
            if (u.strength == strength) {
                this.incrementalAdd(u);
            }
        }
        strength = strength.nextWeaker();
    } while (strength != Strength.WEAKEST)
}
const t447 = Planner.prototype;
t447.incrementalRemove = f667;
function f695() {
    let v697 = this.currentMark;
    return ++v697;
}
const t453 = Planner.prototype;
t453.newMark = f695;
function f700(a701) {
    var mark = this.newMark();
    const v706 = new Plan();
    var plan = v706;
    var todo = a701;
    while (todo.size() > 0) {
        var c = todo.removeFirst();
        if ((c.output().mark != mark) && c.inputsKnown(mark)) {
            plan.addConstraint(c);
            const t463 = c.output();
            t463.mark = mark;
            this.addConstraintsConsumingTo(c.output(), todo);
        }
    }
    return plan;
}
const t471 = Planner.prototype;
t471.makePlan = f700;
function f725(a726) {
    const v727 = new OrderedCollection();
    var sources = v727;
    for (let i730 = 0; i730 < a726.size(); i730++) {
        var c = a726.at(i730);
        if (c.isInput() && c.isSatisfied()) {
            sources.add(c);
        }
    }
    return this.makePlan(sources);
}
const t484 = Planner.prototype;
t484.extractPlanFromConstraints = f725;
function f745(a746, a747) {
    const v748 = new OrderedCollection();
    var todo = v748;
    todo.add(a746);
    while (todo.size() > 0) {
        var d = todo.removeFirst();
        if (d.output().mark == a747) {
            this.incrementalRemove(a746);
            return false;
        }
        d.recalculate();
        this.addConstraintsConsumingTo(d.output(), todo);
    }
    return true;
}
const t501 = Planner.prototype;
t501.addPropagate = f745;
function f768(a769) {
    a769.determinedBy = null;
    a769.walkStrength = Strength.WEAKEST;
    a769.stay = true;
    const v773 = new OrderedCollection();
    var unsatisfied = v773;
    const v775 = new OrderedCollection();
    var todo = v775;
    todo.add(a769);
    while (todo.size() > 0) {
        var v = todo.removeFirst();
        for (let i784 = 0; i784 < v.constraints.size(); i784++) {
            var c = v.constraints.at(i784);
            if (!c.isSatisfied()) {
                unsatisfied.add(c);
            }
        }
        var determining = v.determinedBy;
        for (let i800 = 0; i800 < v.constraints.size(); i800++) {
            var next = v.constraints.at(i800);
            if ((next != determining) && next.isSatisfied()) {
                next.recalculate();
                todo.add(next.output());
            }
        }
    }
    return unsatisfied;
}
const t531 = Planner.prototype;
t531.removePropagateFrom = f768;
function f817(a818, a819) {
    var determining = a818.determinedBy;
    var cc = a818.constraints;
    for (let i825 = 0; i825 < cc.size(); i825++) {
        var c = cc.at(i825);
        if ((c != determining) && c.isSatisfied()) {
            a819.add(c);
        }
    }
}
const t543 = Planner.prototype;
t543.addConstraintsConsumingTo = f817;
function Plan() {
    const v839 = new OrderedCollection();
    this.v = v839;
}
function f841(a842) {
    this.v.add(a842);
}
const t552 = Plan.prototype;
t552.addConstraint = f841;
function f847() {
    return this.v.size();
}
const t557 = Plan.prototype;
t557.size = f847;
function f852(a853) {
    return this.v.at(a853);
}
const t562 = Plan.prototype;
t562.constraintAt = f852;
function f858() {
    for (let i860 = 0; i860 < this.size(); i860++) {
        var c = this.constraintAt(i860);
        c.execute();
    }
}
const t570 = Plan.prototype;
t570.execute = f858;
function chainTest(a873) {
    const v874 = new Planner();
    planner = v874;
    var prev = null;
    var first = null;
    var last = null;
    for (let i883 = 0; i883 <= a873; i883++) {
        var name = "v" + i883;
        const v891 = new Variable(name);
        var v = v891;
        if (prev != null) {
            new EqualityConstraint(prev, v, Strength.REQUIRED);
        }
        if (i883 == 0) {
            first = v;
        }
        if (i883 == a873) {
            last = v;
        }
        prev = v;
    }
    new StayConstraint(last, Strength.STRONG_DEFAULT);
    const v903 = new EditConstraint(first, Strength.PREFERRED);
    var edit = v903;
    const v905 = new OrderedCollection();
    var edits = v905;
    edits.add(edit);
    var plan = planner.extractPlanFromConstraints(edits);
    for (let i912 = 0; i912 < 100; i912++) {
        first.value = i912;
        plan.execute();
        last.value;
    }
}
function projectionTest(a921) {
    const v922 = new Planner();
    planner = v922;
    const v926 = new Variable("scale", 10);
    var scale = v926;
    const v930 = new Variable("offset", 1000);
    var offset = v930;
    var src = null;
    var dst = null;
    const v936 = new OrderedCollection();
    var dests = v936;
    for (let i939 = 0; i939 < a921; i939++) {
        const v946 = new Variable("src" + i939, i939);
        src = v946;
        const v949 = new Variable("dst" + i939, i939);
        dests.add(dst = v949);
        new StayConstraint(src, Strength.NORMAL);
        new ScaleConstraint(src, scale, offset, dst, Strength.REQUIRED);
    }
    change(src, 17);
    dst.value;
    change(dst, 1050);
    src.value;
    change(scale, 5);
    for (let i967 = 0; i967 < (a921 - 1); i967++) {
        dests.at(i967).value;
        (i967 * 5) + 1000;
    }
    change(offset, 2000);
    for (let i983 = 0; i983 < (a921 - 1); i983++) {
        dests.at(i983).value;
        (i983 * 5) + 2000;
    }
}
function change(a997, a998) {
    const v1000 = new EditConstraint(a997, Strength.PREFERRED);
    var edit = v1000;
    const v1002 = new OrderedCollection();
    var edits = v1002;
    edits.add(edit);
    var plan = planner.extractPlanFromConstraints(edits);
    for (let i1009 = 0; i1009 < 10; i1009++) {
        a997.value = a998;
        plan.execute();
    }
    edit.destroyConstraint();
}
var planner = null;
function deltaBlue() {
    chainTest(100);
    projectionTest(100);
}
deltaBlue();
