console.log("If an object has an indexed property shadowing a property of the same name on the prototype, the correct shadowing property should be returned - even if teh property from the prototype comes from an overriden implementation of getOwPropertySlot.");
function test(a4) {
    const v7 = new String("X");
    var testObject = { __proto__: v7, 0: "success" };
    return testObject[a4];
}
test("0");
