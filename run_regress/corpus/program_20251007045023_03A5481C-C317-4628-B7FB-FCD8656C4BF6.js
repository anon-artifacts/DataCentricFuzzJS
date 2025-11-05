function assert(a1) {
}
function test1(a3) {
    for (let i5 = 20; i5 < 30; ++i5) {
    }
    return a3;
}
function test2(a12) {
    for (const v17 of [1,2,3]) {
    }
    return a12;
}
function test3(a19) {
    for (const v21 in {}) {
    }
    return a19;
}
function test4(a23) {
    let i = 0;
    for (let i27 = 20; i < 1; ++i) {
    }
    return a23;
}
function test5(a34) {
    for (const v39 of [1,2,3]) {
    }
    return a34;
}
function test6(a41) {
    for (const v43 in {}) {
    }
    return a41;
}
const v44 = (a45) => {
    for (let i47 = 20; i47 < 30; ++i47) {
    }
    return a45;
};
let test7 = v44;
const v54 = (a55) => {
    for (const v60 of [1,2,3]) {
    }
    return a55;
};
let test8 = v54;
const v62 = (a63) => {
    for (const v65 in {}) {
    }
    return a63;
};
let test9 = v62;
const v67 = (a68) => {
    let i = 0;
    for (let i72 = 20; i < 1; ++i) {
    }
    return a68;
};
let test10 = v67;
const v79 = (a80) => {
    for (const v85 of [1,2,3]) {
    }
    return a80;
};
let test11 = v79;
const v87 = (a88) => {
    for (const v90 in {}) {
    }
    return a88;
};
let test12 = v87;
for (const v93 of [test1,test2,test3,test4,test5,test7,test8,test9,test10,test11,test12]) {
    v93("foo") === "foo";
}
