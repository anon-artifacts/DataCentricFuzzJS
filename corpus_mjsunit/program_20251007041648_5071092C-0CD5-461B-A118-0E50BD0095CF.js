function next1(a1, a2) {
    var obj = { done: true, value: undefined };
    if (a2 > 5) {
        return obj;
    }
    const v10 = a1[a2];
    return { done: false, value: v10 };
}
function iterator1(a13) {
    var arr = [0,1,2,3,4,5,6,7,8,9,10];
    var res = next1(arr, a13);
    if (!res.done) {
        console.log(res.value);
    }
}
iterator1(5);
iterator1(100);
iterator1(5);
console.log("Done iterator1\n");
function next2(a44, a45) {
    if (a45 > 5) {
        var obj = { done: true, value: undefined };
        function f53() {
            console.log("getter\n");
            return true;
        }
        Object.defineProperty(obj, "done", { get: f53 });
        return obj;
    }
    const v61 = a44[a45];
    return { done: false, value: v61 };
}
function iterator2(a64) {
    var arr = [0,1,2,3,4,5,6,7,8,9,10];
    var res = next2(arr, a64);
    if (!res.done) {
        console.log(res.value);
    }
}
iterator2(5);
iterator2(100);
iterator2(200);
console.log("Done iterator2\n");
function next3(a93, a94) {
    if (a94 > 5) {
        const v102 = {
            get done() {
                console.log("getter\n");
                return true;
            },
            value: undefined,
        };
        return v102;
    }
    const v104 = a93[a94];
    return { done: false, value: v104 };
}
function iterator3(a107) {
    var arr = [0,1,2,3,4,5,6,7,8,9,10];
    var res = next3(arr, a107);
    if (!res.done) {
        console.log(res.value);
    }
}
iterator3(5);
iterator3(100);
iterator3(200);
console.log("Done iterator3\n");
function test0() {
    var obj1 = {};
    var arrObj0 = {};
    function f140(a141) {
        with (arrObj0) {
            if (a141 > 100) {
                function f145() {
                    console.log("obj1.prop1 getter");
                    return 3;
                }
                obj1.prop1 = Object.defineProperty(obj1, "prop1", { get: f145, configurable: true });
            } else {
                obj1.prop1 = 3;
            }
            true ? obj1.prop1 : obj1.prop1;
        }
    }
    var func0 = f140;
    func0(200);
    func0(200);
    func0(100);
}
test0();
