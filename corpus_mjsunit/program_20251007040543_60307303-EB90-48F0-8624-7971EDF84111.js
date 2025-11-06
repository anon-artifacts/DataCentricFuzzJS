if (("").match(/(,9111111111{2257483648,}[:lower:])|(ab)/)) {
    const v5 = new Error("Incorrect result, should not have matched");
    throw v5;
}
if (("").match(/(1{1,2147483648})|(ab)/)) {
    const v11 = new Error("Incorrect result, should not have matched");
    throw v11;
}
if (("").match(/(1{2147480000,}2{3648,})|(ab)/)) {
    const v17 = new Error("Incorrect result, should not have matched");
    throw v17;
}
if (!("1234").match(/1{1,2147483645}2{1,2147483645}3{1,2147483645}4{1,2147483645}/)) {
    const v24 = new Error("Incorrect result, should have matched");
    throw v24;
}
