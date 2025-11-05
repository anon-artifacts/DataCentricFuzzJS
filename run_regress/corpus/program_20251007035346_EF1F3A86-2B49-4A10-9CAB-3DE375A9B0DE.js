function write(a1) {
    print(a1 + "");
}
function global() {
    write("global");
}
function another() {
    write("another");
}
function g1() {
    write("g1");
}
function g2() {
    write("g2");
}
function g3() {
    write("g3");
}
function g4() {
    write("g4");
}
function f24() {
    g1();
    function g1() {
        write("first");
    }
    var x = g1;
    g1();
    function g1() {
        write("second");
    }
    var y = g1;
    g1();
}
f24();
function f37() {
    try {
        g2();
    } catch(e39) {
        write(e39);
    }
    var g2 = global;
    try {
        g2();
    } catch(e43) {
        write(e43);
    }
    function g2() {
        write("second");
    }
    var y = g2;
    try {
        g2();
    } catch(e50) {
        write(e50);
    }
}
f37();
function f53() {
    try {
        g3();
    } catch(e55) {
        write(e55);
    }
    function g3() {
        write("first");
    }
    var x = g3;
    try {
        g3();
    } catch(e62) {
        write(e62);
    }
    var g3 = global;
    try {
        g3();
    } catch(e66) {
        write(e66);
    }
}
f53();
function f69() {
    try {
        g4();
    } catch(e71) {
        write(e71);
    }
    var g4 = global;
    try {
        g4();
    } catch(e75) {
        write(e75);
    }
    var g4 = another;
    try {
        g4();
    } catch(e79) {
        write(e79);
    }
}
f69();
