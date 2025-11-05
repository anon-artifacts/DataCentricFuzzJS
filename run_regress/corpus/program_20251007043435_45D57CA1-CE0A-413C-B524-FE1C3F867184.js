function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
{
    let capture = [];
    const v14 = {
        valueOf() {
            capture.push("leftValue");
            return 3;
        },
    };
    let leftValue = v14;
    const v20 = {
        valueOf() {
            capture.push("rightValue");
            return 2;
        },
    };
    let rightValue = v20;
    capture.push("left");
    capture.push("right");
    leftValue ** +rightValue;
    shouldBe(capture[0], "left");
    shouldBe(capture[1], "right");
    shouldBe(capture[2], "rightValue");
    shouldBe(capture[3], "leftValue");
}
{
    let capture = [];
    const v46 = {
        valueOf() {
            capture.push("leftValue");
            return 3;
        },
    };
    let leftValue = v46;
    const v52 = {
        valueOf() {
            capture.push("rightValue");
            return 2;
        },
    };
    let rightValue = v52;
    capture.push("left");
    const v56 = +leftValue;
    capture.push("right");
    v56 ** rightValue;
    shouldBe(capture[0], "left");
    shouldBe(capture[1], "leftValue");
    shouldBe(capture[2], "right");
    shouldBe(capture[3], "rightValue");
}
