console.log("Tests that the DFG doesn't get confused about an edge being a double edge after we perform CFG simplification.");
function foo(a4, a5) {
    var p2;
    var x;
    var y;
    if (a5) {
        p2 = true;
    } else {
        p2 = true;
    }
    if (p2) {
        x = a4;
    } else {
        x = 0.5;
    }
    if (p2) {
        y = a4;
    } else {
        y = 0.7;
    }
    var result = x + y;
    return [result,[x,y],[x,y],[x,y]];
}
for (let i23 = 0; i23 < 200; i23++) {
    foo(42, true)[0];
}
foo(42, true)[0];
