function write(a1) {
    if (typeof WScript == "undefined") {
        print(a1);
    } else {
        print(a1);
    }
}
function TestWithProto(a11) {
    function Construct() {
    }
    Construct.prototype = a11;
    const v13 = new Construct();
    var derived = v13;
    for (let i16 = 0; i16 < 3; i16++) {
        const v23 = i16 + 0.3;
        derived["p" + i16] = v23;
    }
    function TestForInObjectWithProto() {
        for (const v27 in derived) {
            write(v27);
        }
    }
    write("Scenario: Testing forin on object with prototype");
    TestForInObjectWithProto();
    if (a11 && a11.hasOwnProperty("a")) {
        delete a11.a;
    }
    write("Scenario: Testing forin on object with prototype after changing prototype");
    TestForInObjectWithProto();
}
TestWithProto({ a: 0.27, c: 0.12, g: 0.12, t: 0.23 });
TestWithProto(null);
TestWithProto(undefined);
