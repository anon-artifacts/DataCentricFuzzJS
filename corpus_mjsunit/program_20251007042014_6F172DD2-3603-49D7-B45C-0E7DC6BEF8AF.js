var BUGNUMBER = 1185106;
var summary = "async arrow function syntax";
print((BUGNUMBER + ": ") + summary);
if ((typeof Reflect !== "undefined") && Reflect.parse) {
    Reflect.parse("async () => 1");
    Reflect.parse("async a => 1");
    Reflect.parse("async (a) => 1");
    Reflect.parse("async async => 1");
    Reflect.parse("async (async) => 1");
    Reflect.parse("async ([a]) => 1");
    Reflect.parse("async ([a, b]) => 1");
    Reflect.parse("async ({a}) => 1");
    Reflect.parse("async ({a, b}) => 1");
    const v33 = () => {
        return Reflect.parse("async await => 1");
    };
    v33();
    const v38 = () => {
        return Reflect.parse("async (await) => 1");
    };
    v38();
    const v42 = () => {
        return Reflect.parse("async ([await]) => 1");
    };
    v42();
    const v46 = () => {
        return Reflect.parse("async ({await}) => 1");
    };
    v46();
    const v50 = () => {
        return Reflect.parse("async (a=await) => 1");
    };
    v50();
    const v54 = () => {
        return Reflect.parse("async ([a=await]) => 1");
    };
    v54();
    const v58 = () => {
        return Reflect.parse("async ({a=await}) => 1");
    };
    v58();
    const v62 = () => {
        return Reflect.parse("async (a=await 1) => 1");
    };
    v62();
    const v66 = () => {
        return Reflect.parse("async ([a=await 1]) => 1");
    };
    v66();
    const v70 = () => {
        return Reflect.parse("async ({a=await 1}) => 1");
    };
    v70();
    const v74 = () => {
        return Reflect.parse("async [a] => 1");
    };
    v74();
    const v78 = () => {
        return Reflect.parse("async [a, b] => 1");
    };
    v78();
    const v82 = () => {
        return Reflect.parse("async {a} => 1");
    };
    v82();
    const v86 = () => {
        return Reflect.parse("async {a: b} => 1");
    };
    v86();
    Reflect.parse("async a => a == b");
    Reflect.parse("async a => async");
    Reflect.parse("async a => async b => c");
    Reflect.parse("async a => async function() {}");
    Reflect.parse("async a => async function b() {}");
    const v100 = () => {
        return Reflect.parse("async a => async b");
    };
    v100();
    const v104 = () => {
        return Reflect.parse("async a => async function");
    };
    v104();
    const v108 = () => {
        return Reflect.parse("async a => async function()");
    };
    v108();
    Reflect.parse("async a => await 1");
    Reflect.parse("async a => await await 1");
    Reflect.parse("async a => await await await 1");
    const v118 = () => {
        return Reflect.parse("async a => await");
    };
    v118();
    const v122 = () => {
        return Reflect.parse("async a => await await");
    };
    v122();
    const v126 = () => {
        return Reflect.parse("async a => await async X => Y");
    };
    v126();
    Reflect.parse("async a => await (async X => Y)");
    Reflect.parse("async async => await async");
    Reflect.parse("async X => {yield}");
    Reflect.parse("async X => yield");
    Reflect.parse("async yield => X");
    Reflect.parse("async yield => yield");
    Reflect.parse("async X => {yield}");
    Reflect.parse("async X => {yield}");
    Reflect.parse("async yield => {X}");
    Reflect.parse("async yield => {yield}");
    Reflect.parse("function* g() { async X => yield }");
    const v152 = () => {
        return Reflect.parse("'use strict'; async yield => X");
    };
    v152();
    const v156 = () => {
        return Reflect.parse("'use strict'; async (yield) => X");
    };
    v156();
    const v160 = () => {
        return Reflect.parse("'use strict'; async X => yield");
    };
    v160();
    const v164 = () => {
        return Reflect.parse("'use strict'; async X => {yield}");
    };
    v164();
    const v168 = () => {
        return Reflect.parse("function* g() { async yield => X }");
    };
    v168();
    const v172 = () => {
        return Reflect.parse("function* g() { async (yield) => X }");
    };
    v172();
    const v176 = () => {
        return Reflect.parse("function* g() { async ([yield]) => X }");
    };
    v176();
    const v180 = () => {
        return Reflect.parse("function* g() { async ({yield}) => X }");
    };
    v180();
    Reflect.parse("async ()");
    Reflect.parse("async (a)");
    Reflect.parse("async (async)");
    Reflect.parse("async ([a])");
    Reflect.parse("async ([a, b])");
    Reflect.parse("async ({a})");
    Reflect.parse("async ({a, b})");
    Reflect.parse("a ? async () => {1} : b");
    Reflect.parse("a ? b : async () => {1}");
    const v202 = () => {
        return Reflect.parse("async () => {1} ? a : b");
    };
    v202();
}
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
