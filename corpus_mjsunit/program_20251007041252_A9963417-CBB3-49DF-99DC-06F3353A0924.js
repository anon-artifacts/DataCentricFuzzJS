function assertEquals(a1, a2, a3) {
}
var desc = Object.getOwnPropertyDescriptor(Error, "stackTraceLimit");
typeof desc.value;
desc.writable;
desc.enumerable;
desc.configurable;
desc.get;
desc.set;
function recurse(a29) {
    if (a29) {
        recurse(a29 - 1);
    } else {
        const v33 = new Error();
        throw v33;
    }
}
function numberOfFrames(a35) {
    if ((a35 === undefined) || (a35 === "")) {
        return 0;
    }
    var lines = a35.split(/\r\n|\r|\n/);
    return lines.length;
}
var exception;
function testLimit(a49, a50, a51, a52, a53) {
    exception = undefined;
    a50();
    Error.stackTraceLimit;
    try {
        recurse(a51);
    } catch(e58) {
        exception = e58;
    }
    a49 + 1;
    if (typeof a53 == "undefined") {
        a49 + 2;
        exception.stack;
    } else {
        a49 + 3;
        numberOfFrames(exception.stack);
    }
}
const v74 = () => {
    Error.stackTraceLimit = 0;
};
testLimit(1000, v74, 1000, 0, 0);
exception.stack;
const v84 = () => {
    Error.stackTraceLimit = 10;
};
testLimit(2000, v84, 1000, 10, 10);
const v91 = () => {
    Error.stackTraceLimit = 100;
};
testLimit(3000, v91, 1000, 100, 100);
const v98 = () => {
    Error.stackTraceLimit = 1000;
};
testLimit(4000, v98, 1000, 1000, 1000);
const v105 = () => {
    Error.stackTraceLimit = 2000;
};
testLimit(5000, v105, 1000, 2000, 1003);
var value = {};
const v114 = () => {
    Error.stackTraceLimit = value;
};
testLimit(6000, v114, 1000, value, undefined);
const v120 = {
    valueOf() {
        return 5;
    },
};
var value = v120;
const v123 = () => {
    Error.stackTraceLimit = value;
};
testLimit(7000, v123, 1000, value, undefined);
var value = [1,2,3];
const v133 = () => {
    Error.stackTraceLimit = value;
};
testLimit(8000, v133, 1000, value, undefined);
var value = "hello";
const v140 = () => {
    Error.stackTraceLimit = value;
};
testLimit(9000, v140, 1000, value, undefined);
var value = Symbol("hello");
const v149 = () => {
    Error.stackTraceLimit = value;
};
testLimit(10000, v149, 1000, value, undefined);
var value = true;
const v156 = () => {
    Error.stackTraceLimit = value;
};
testLimit(11000, v156, 1000, value, undefined);
var value = false;
const v163 = () => {
    Error.stackTraceLimit = value;
};
testLimit(12000, v163, 1000, value, undefined);
var value;
const v170 = () => {
    Error.stackTraceLimit = value;
};
testLimit(13000, v170, 1000, value, undefined);
const v175 = () => {
    Error.stackTraceLimit = 10;
};
testLimit(14000, v175, 1000, 10, 10);
const v182 = () => {
    delete Error.stackTraceLimit;
};
testLimit(15000, v182, 1000, undefined, undefined);
const v189 = () => {
    Error.stackTraceLimit = 10;
};
testLimit(16000, v189, 1000, 10, 10);
