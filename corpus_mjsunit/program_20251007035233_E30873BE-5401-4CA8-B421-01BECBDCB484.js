function f0() {
}
function t1(a2, a3) {
    var s = "";
    class C7 extends Promise {
    }
    function f8(a9, a10) {
        a9("foo");
    }
    const v13 = new C7(f8);
    var p1 = v13;
    function f15(a16, a17) {
        a17("quux");
    }
    const v20 = new C7(f15);
    var p2 = v20;
    s += "a";
    console.log(p1 instanceof C7);
    function thenFn(a27) {
        const v29 = a27 === "foo";
        try { f0.isTrue(v29); } catch (e) {}
        s += "b";
    }
    function catchFn(a33) {
        const v35 = a33 === "quux";
        try { f0.isTrue(v35); } catch (e) {}
        s += "c";
    }
    function shouldNotRun(a39) {
        try { f0.isTrue(false); } catch (e) {}
    }
    p1.then(thenFn, shouldNotRun);
    p2.then(shouldNotRun, catchFn);
    p1.catch(shouldNotRun);
    p2.catch(catchFn);
    function f46() {
        console.log((p1.then() instanceof C7) && (p1.then() !== p1));
        s += "d";
        check();
    }
    p1.then(f46);
    function check() {
        console.log((("Result of test #" + a2) + " ") + a3);
        console.log(s);
    }
}
t1(1, "1");
function t2(a69, a70) {
    var s = "";
    class C74 extends Promise {
    }
    function f75(a76) {
        a76("foo");
    }
    const v79 = new Promise(f75);
    function f80(a81) {
        a81("foo");
    }
    const v84 = new Promise(f80);
    var fulfills = C74.all([v79,v84]);
    s += "a";
    function f89(a90, a91) {
        a91("bar");
    }
    const v94 = new Promise(f89);
    function f95(a96, a97) {
        a97("bar");
    }
    const v100 = new Promise(f95);
    var rejects = C74.all([v94,v100]);
    console.log(fulfills instanceof C74);
    function f107(a108) {
        console.log((a108 + "") === "foo,foo");
        s += "b";
    }
    fulfills.then(f107);
    function f116(a117) {
        console.log(a117 === "bar");
        s += "c";
        check();
    }
    rejects.catch(f116);
    function check() {
        console.log((("Result of test #" + a69) + " ") + a70);
        console.log(s);
    }
}
t2(2, "2");
function t3(a137, a138) {
    var s = "";
    class C142 extends Promise {
    }
    function f143(a144) {
        a144("foo");
    }
    const v147 = new Promise(f143);
    function f148(a149, a150) {
        a150("bar");
    }
    const v153 = new Promise(f148);
    var fulfills = C142.race([v147,v153]);
    s += "a";
    function f158(a159, a160) {
        a160("baz");
    }
    const v163 = new Promise(f158);
    function f164(a165) {
        a165("qux");
    }
    const v168 = new Promise(f164);
    var rejects = C142.race([v163,v168]);
    console.log(fulfills instanceof C142);
    function f175(a176) {
        console.log(a176 === "foo");
        s += "b";
    }
    fulfills.then(f175);
    function f182(a183) {
        console.log(a183 === "baz");
        s += "c";
        check();
    }
    rejects.catch(f182);
    function check() {
        console.log((("Result of test #" + a137) + " ") + a138);
        console.log(s);
    }
}
t3(3, "3");
