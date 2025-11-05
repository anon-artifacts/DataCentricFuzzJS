function testNewString() {
    function f1() {
        return "string";
    }
    var o = { toString: f1 };
    var r = [];
    for (let i8 = 0; i8 < 5; i8++) {
        const v15 = new String(o);
        r.push(typeof v15);
    }
    for (let i19 = 0; i19 < 5; i19++) {
        const v27 = new String(3);
        r.push(typeof v27);
    }
    for (let i31 = 0; i31 < 5; i31++) {
        const v39 = new String(2.5);
        r.push(typeof v39);
    }
    for (let i43 = 0; i43 < 5; i43++) {
        const v51 = new String("string");
        r.push(typeof v51);
    }
    for (let i55 = 0; i55 < 5; i55++) {
        const v63 = new String(null);
        r.push(typeof v63);
    }
    for (let i67 = 0; i67 < 5; i67++) {
        const v75 = new String(true);
        r.push(typeof v75);
    }
    for (let i79 = 0; i79 < 5; i79++) {
        const v87 = new String(undefined);
        r.push(typeof v87);
    }
    const v92 = r.length === 35;
    function f93(a94) {
        return a94 === "object";
    }
    return v92 && r.every(f93);
}
testNewString();
