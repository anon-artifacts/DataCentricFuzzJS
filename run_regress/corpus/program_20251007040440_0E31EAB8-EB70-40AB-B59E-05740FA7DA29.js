function assert(a1) {
}
function f2() {
    var trace = [];
    const v19 = {
        value: 5,
        get bar() {
            trace.push("get");
            return this.value;
        },
        set bar(a11) {
        },
        set bar(a13) {
            trace.push("set2");
            this.value = a13 + 10000;
            return this.value;
        },
    };
    var foo = v19;
    foo.value == 5;
    trace == "";
    foo.bar == 5;
    trace == "get";
    foo.bar = 20;
    trace == "get,set2";
    foo.value == 10020;
    trace == "get,set2";
    foo.bar == 10020;
    trace == "get,set2,get";
}
f2();
function f45() {
    var trace = [];
    const v60 = {
        value: 5,
        set bar(a50) {
            trace.push("set");
            this.value = a50;
            return this.value;
        },
        get bar() {
        },
        get bar() {
            trace.push("get2");
            this.value += 10000;
            return this.value;
        },
    };
    var foo = v60;
    foo.value == 5;
    trace == "";
    foo.bar == 10005;
    trace == "get2";
    foo.bar = 20;
    trace == "get2,set";
    foo.value == 20;
    trace == "get2,set";
    foo.bar == 10020;
    trace == "get2,set,get2";
}
f45();
