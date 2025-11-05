console.log("This tests that throwing from a finally block has the expected effect.");
var events = [];
try {
    events.push("1:try");
} finally {
    events.push("1:finally");
}
try {
    try {
        throw "2:thingy";
    } finally {
        events.push("2:finally");
    }
} catch(e12) {
    events.push(e12);
}
try {
    throw "3:thingy";
} catch(e15) {
    events.push(e15);
} finally {
    events.push("3:finally");
}
try {
    try {
        throw "4:thingy";
    } catch(e20) {
        events.push(e20);
    } finally {
        events.push("4:finally");
        throw "4:another thingy";
    }
} catch(e25) {
    events.push(e25);
}
try {
    for (;;) {
        try {
            continue;
        } finally {
            events.push("5:hi");
            throw "5:wat";
        }
    }
} catch(e31) {
    events.push(e31);
}
"" + events;
